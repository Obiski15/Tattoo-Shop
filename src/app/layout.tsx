import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const satoshi = localFont({
  src: "/fonts/satoshi.otf",
});

export const metadata: Metadata = {
  title: "Tattoo Shop",
  description: "Your perfect tattoo, brought to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-foreground min-w-[375px] max-w-[1440px] ${satoshi.className}`}
      >
        {children}
      </body>
    </html>
  );
}
