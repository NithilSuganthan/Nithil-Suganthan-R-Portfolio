import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nithil Suganthan | Software Engineer & Founder",
  description: "Portfolio of Nithil Suganthan R, a B.Tech IT undergraduate specializing in full-stack web development, robotics, and embedded systems (Arduino, ESP32). Founder of Inventobots Academy.",
  keywords: ["Nithil Suganthan R", "Software Engineer", "Full Stack Developer", "Robotics", "Arduino", "React", "Next.js", "Portfolio", "Inventobots Academy"],
  authors: [{ name: "Nithil Suganthan R" }],
  creator: "Nithil Suganthan R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithilsuganthanrportfolio.vercel.app/",
    title: "Nithil Suganthan | Software Engineer & Founder",
    description: "Discover the projects, skills, and startup ventures of Nithil Suganthan R.",
    siteName: "Nithil Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nithil Suganthan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithil Suganthan | Software Engineer & Founder",
    description: "Discover the projects, skills, and startup ventures of Nithil Suganthan R.",
    creator: "@NithilSuganthan",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
