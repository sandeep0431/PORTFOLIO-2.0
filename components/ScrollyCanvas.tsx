"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { Overlay } from "./Overlay";

const TOTAL_FRAMES = 181; // 0 to 180 (total 181 frames)

export const ScrollyCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Raw scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Silky smooth spring-interpolated scroll progress to eliminate wheel / touch jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    mass: 0.18,
    restDelta: 0.0001,
  });

  // Track loaded images by frame index in a sparse/dense array
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const [initialFrameReady, setInitialFrameReady] = useState(false);
  const lastDrawnFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  // Find the closest loaded frame to the desired target frame
  const getClosestLoadedImage = useCallback((targetIndex: number): HTMLImageElement | null => {
    const images = imagesRef.current;
    if (images[targetIndex]?.complete && (images[targetIndex]?.naturalWidth ?? 0) > 0) {
      return images[targetIndex];
    }

    // Search outwards from targetIndex (e.g. ±1, ±2, ±3...)
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIndex - offset;
      if (prev >= 0 && images[prev]?.complete && (images[prev]?.naturalWidth ?? 0) > 0) {
        return images[prev];
      }
      const next = targetIndex + offset;
      if (next < TOTAL_FRAMES && images[next]?.complete && (images[next]?.naturalWidth ?? 0) > 0) {
        return images[next];
      }
    }

    return null;
  }, []);

  // Draw specific frame onto canvas with DPI compensation
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = getClosestLoadedImage(frameIndex);
    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || img.width || canvasWidth;
    const imgHeight = img.naturalHeight || img.height || canvasHeight;

    // Cover scale calculation
    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const dw = imgWidth * scale;
    const dh = imgHeight * scale;
    const dx = (canvasWidth - dw) / 2;
    const dy = (canvasHeight - dh) / 2;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    try {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, dx, dy, dw, dh);
      lastDrawnFrameRef.current = frameIndex;
    } catch {
      // Ignore draw errors during image swap
    }
  }, [getClosestLoadedImage]);

  // Request a repaint on next animation frame
  const scheduleDraw = useCallback((frameIndex: number) => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    rafIdRef.current = requestAnimationFrame(() => {
      renderFrame(frameIndex);
    });
  }, [renderFrame]);

  // Preload frames in prioritized order (initial frames first, then remainder)
  useEffect(() => {
    let isCancelled = false;

    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = `/sequence/frame_000_delay-0.041s.webp`;
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = firstImg;
      setInitialFrameReady(true);
      scheduleDraw(0);
    };

    // Load high-priority initial sequence (frames 1 to 30)
    const priorityCount = 30;
    for (let i = 1; i < Math.min(priorityCount, TOTAL_FRAMES); i++) {
      const img = new Image();
      const padded = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${padded}_delay-0.041s.webp`;
      img.onload = () => {
        if (isCancelled) return;
        imagesRef.current[i] = img;
      };
    }

    // Load remaining frames asynchronously
    const timer = setTimeout(() => {
      for (let i = priorityCount; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        const padded = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${padded}_delay-0.041s.webp`;
        img.onload = () => {
          if (isCancelled) return;
          imagesRef.current[i] = img;
        };
      }
    }, 150);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [scheduleDraw]);

  // Canvas resize handler with high-DPI scaling & mobile address bar stabilization
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for mobile efficiency

      const newWidth = Math.round(rect.width * dpr);
      const newHeight = Math.round(rect.height * dpr);

      // Only update if there is a significant size change (avoids mobile address bar jitter)
      if (Math.abs(canvas.width - newWidth) > 2 || Math.abs(canvas.height - newHeight) > 60) {
        canvas.width = newWidth;
        canvas.height = newHeight;

        const currentProg = smoothProgress.get();
        const targetFrame = Math.round(currentProg * (TOTAL_FRAMES - 1));
        renderFrame(targetFrame);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [smoothProgress, renderFrame]);

  // React to smooth spring progress changes
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(latest * (TOTAL_FRAMES - 1)))
    );

    if (frameIndex !== lastDrawnFrameRef.current) {
      scheduleDraw(frameIndex);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[380vh] md:h-[480vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            initialFrameReady ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Ambient Dark Overlay to enhance typography contrast */}
        <div className="absolute inset-0 bg-black/45 z-0 pointer-events-none" />

        {/* Dynamic Typographic Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Overlay progress={smoothProgress} />
        </div>
      </div>
    </div>
  );
};

