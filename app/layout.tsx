import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jasmine Tai",
  description: "software development and computer systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono bg-black text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
