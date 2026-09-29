import "./globals.css";
import { Inter } from "next/font/google";
import { CustomCursor } from "../components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 text-white min-h-screen antialiased selection:bg-blue-500/30`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
