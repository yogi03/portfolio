import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";


import TargetCursor from "@/components/TargetCursor";
import Particles from "@/components/Particles";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://notyogi.space"),
  title: "Yogi",
  description: "Software Developer Portfolio of Yogendra Chaurasiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col font-sans bg-background text-foreground"
        suppressHydrationWarning
      >
          {/* Global Particles Background */}
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
            <Particles
              particleColors={["#FFFF22"]}
              particleCount={100}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
            />
          </div>
          
          <TargetCursor 
            spinDuration={2}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
            cursorColor="#FFFF22"
            cursorColorOnTarget="#FFFF22"
          />
          <SmoothScroll>
            {/* The relative z-10 ensures content sits above the fixed background */}
            <div className="relative z-10">
              {children}
              <Footer />
            </div>
          </SmoothScroll>
          <Toaster duration={5000} position="bottom-right" toastOptions={{ style: { background: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--accent)' } }} />
          <Analytics />
      </body>
    </html>
  );
}
