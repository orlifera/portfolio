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

export const metadata: Metadata = {
  title: "Orlando V. M Ferazzani",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${geistMono.className} w-full antialiased bg-gradient-to-b from-background via-muted-foreground to-foreground text-foreground flex flex-col`}
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
