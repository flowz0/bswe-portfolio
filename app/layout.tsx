import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Billy Flowers Software Engineer Portfolio",
  description: "Billy Flowers is a software engineer based in Modesto, CA who builds accessible, scalable, and performant digital experiences on the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-JF7ZVSWSVP" />
      </body>
    </html>
  );
}
