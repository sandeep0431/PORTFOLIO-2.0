import "./globals.css";
import { Inter, Space_Grotesk, DM_Serif_Display } from "next/font/google";
import { CustomCursor } from "../components/CustomCursor";
import { ScrollController } from "../components/ScrollController";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata = {
  title: "Sandeep Kumar Sahu | ML & Cybersecurity Developer",
  description: "Portfolio of Sandeep Kumar Sahu — Machine Learning, Cybersecurity, and Full-Stack Developer from VSSUT, Odisha.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="font-sans bg-neutral-950 text-white min-h-screen antialiased selection:bg-blue-500/30">
        <ScrollController />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
