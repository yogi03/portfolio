import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { SmoothScroll, TargetCursor, Particles } from "@/components/ClientWrappers";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://notyogi.space"),
  title: "Yogendra Chaurasiya | Full Stack Developer",
  description: "Software Developer Portfolio of Yogendra Chaurasiya",
  keywords: ["Yogendra Chaurasiya", "Yogi", "Software Developer", "Full Stack Developer", "Delhi", "India", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "Yogendra Chaurasiya | Full Stack Developer",
    description: "Software Developer Portfolio of Yogendra Chaurasiya",
    url: "https://notyogi.space",
    siteName: "Yogendra Chaurasiya",
    images: [
      {
        url: "/opengraph-image.jpg", // Add your OG image to the public folder
        width: 1200,
        height: 630,
        alt: "Yogendra Chaurasiya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogendra Chaurasiya | Full Stack Developer",
    description: "Software Developer Portfolio of Yogendra Chaurasiya",
    images: ["/opengraph-image.jpg"],
  },
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Yogendra Chaurasiya",
                "url": "https://notyogi.space",
                "sameAs": [
                  "https://www.linkedin.com/in/yogendra30/",
                  "https://www.instagram.com/tushar__chaurasiya?igsh=MWU4NmgyM3JvdXF5Yw==",
                  "https://x.com/notyogi_",
                  "https://github.com/notyogi"
                ],
                "jobTitle": "Full Stack Developer"
              })
            }}
          />
      </body>
    </html>
  );
}
