import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suwandi Amin Sangaji - Personal Website",
  description: "Personal Website of Suwandi Amin Sangaji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" id="html-root">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="32x32" />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-primary-dark dark:text-slate-200 transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
