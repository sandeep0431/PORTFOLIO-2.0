"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Overlay } from "./Overlay";

export const ScrollyCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Use default window scroll for the progress since the container is 500vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const numFrames = 181; // 0 to 180 (total 181 frames)
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const lastValidImageRef = useRef<HTMLImageElement | null>(null);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < numFrames; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.041s.webp`;
      
      // when the image is fully loaded, trigger a state update so the canvas can redraw
      img.onload = () => {
        setLoadedCount((prev) => prev + 1);
        if (i === 0) {
          requestAnimationFrame(() => drawImage(0));
        }
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Redraw when images load, in case scroll passed while they were loading
  useEffect(() => {
    if (images.length > 0 && loadedCount > 0) {
      const frameIndex = Math.floor(scrollYProgress.get() * (numFrames - 1));
      requestAnimationFrame(() => drawImage(frameIndex));
    }
  }, [loadedCount, images]);

  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize for no transparency
    if (!ctx) return;

    // Ensure index is within bounds (0 to images.length - 1)
    const safeIndex = Math.max(0, Math.min(index, images.length - 1));
    let img = images[safeIndex];

    // Guard against unready or broken images (img.complete is true even on error)
    if (!img || !img.complete || img.naturalWidth === 0) {
      if (lastValidImageRef.current && lastValidImageRef.current.complete && lastValidImageRef.current.naturalWidth > 0) {
        img = lastValidImageRef.current;
      } else {
        const fallback = images.find((im) => im.complete && im.naturalWidth > 0);
        if (!fallback) return;
        img = fallback;
      }
    }

    lastValidImageRef.current = img;

    const render = () => {
      // Use offsetWidth/offsetHeight to avoid stretching issues if width/height attributes aren't synced
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      const imgWidth = img.width || canvasWidth;
      const imgHeight = img.height || canvasHeight;

      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      
      const dw = imgWidth * scale;
      const dh = imgHeight * scale;
      const dx = (canvasWidth - dw) / 2;
      const dy = (canvasHeight - dh) / 2;

      ctx.fillRect(0, 0, canvasWidth, canvasHeight); // Clear canvas (black background due to alpha: false)
      try {
        ctx.drawImage(img, dx, dy, dw, dh);
      } catch {
        // Prevent uncaught errors if the image state transitions
      }
    };

    render();
  };

  // Setup canvas size and draw initial frame
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      // Adjust canvas resolution for high-DPI displays if possible,
      // but standard window innerWidth is okay for a basic high-perf setup.
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      
      requestAnimationFrame(() => drawImage(0));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  // Map scroll progress to frame index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Convert current progress (0 to 1) to an index (0 to 191)
    const frameIndex = Math.floor(latest * (numFrames - 1));
    const safeIndex = Math.max(0, Math.min(frameIndex, images.length - 1));

    // requestAnimationFrame ensures smooth repaints synced with display refresh
    requestAnimationFrame(() => {
      drawImage(safeIndex);
    });
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Dark overlay to make text pop */}
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />
        
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Overlay progress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
};
