import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import BackToTop from "@/components/BackToTop";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://ovmf.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Orlando Ferazzani | Fullstack Developer",
  description:
    "Orlando Ferazzani — Fullstack Developer based in Padova, Italy. Specializing in React, Next.js, and TypeScript. BsC Computer Science, University of Padua.",
  authors: [{ name: "Orlando Ferazzani", url: BASE_URL }],
  keywords: [
    "Orlando Ferazzani",
    "Orlando V. M. Ferazzani",
    "Fullstack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "TailwindCSS",
    "Web Developer Italy",
    "Sviluppatore Web Padova",
    "Padova",
    "Italy",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Orlando Ferazzani",
    title: "Orlando Ferazzani | Fullstack Developer",
    description:
      "Fullstack Developer based in Padova, Italy. React, Next.js, TypeScript. BsC Computer Science, University of Padua.",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Orlando Ferazzani | Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Ferazzani | Fullstack Developer",
    description:
      "Fullstack Developer based in Padova, Italy. React, Next.js, TypeScript.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Orlando Ferazzani",
  alternateName: "Orlando V. M. Ferazzani",
  url: BASE_URL,
  jobTitle: "Fullstack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Parkito.app",
    url: "https://parkito.app",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Padua",
    url: "https://www.unipd.it",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Padova",
    addressCountry: "IT",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Firebase",
    "Stripe",
    "React Native",
    "Web Development",
    "Fullstack Development",
  ],
  sameAs: [
    "https://github.com/orlifera",
    "https://www.linkedin.com/in/orlando-v-m-ferazzani/",
  ],
  image: `${BASE_URL}/opengraph-image`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistMono.className} w-full antialiased bg-linear-to-b from-background via-muted-foreground to-foreground text-foreground flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
          <Toaster richColors position="top-center" />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
