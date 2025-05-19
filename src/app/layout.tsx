import { Inter } from "next/font/google";
import "./globals.css";
import {AuroraBackground} from "@/components/ui/aurora-background";

const inter = Inter();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <AuroraBackground>{children}</AuroraBackground>
      </body>
    </html>
  );
}
