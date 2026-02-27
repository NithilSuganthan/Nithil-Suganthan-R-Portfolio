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
  title: "Nithil Suganthan | Full Stack & Robotics Developer",
  description: "Portfolio of Nithil Suganthan R, a Software Developer specializing in full-stack web applications, scalable APIs, and embedded robotics systems.",
  keywords: ["Nithil Suganthan R", "Software Engineer", "Full Stack Developer", "Robotics", "Arduino", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Nithil Suganthan R" }],
  creator: "Nithil Suganthan R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithilsuganthanrportfolio.vercel.app/",
    title: "Nithil Suganthan | Full Stack & Robotics Developer",
    description: "Discover the projects, technical impact, and skills of Nithil Suganthan R.",
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
    title: "Nithil Suganthan | Full Stack & Robotics Developer",
    description: "Discover the projects, technical impact, and skills of Nithil Suganthan R.",
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
