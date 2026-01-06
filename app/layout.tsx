import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kabuten 株典 - AI-powered fundamental research",
  description: "In-depth analysis of Japanese companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
