import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "University Discovery Tour | Descubre tu universidad ideal",
  description:
    "El programa #1 de tours universitarios en México. Visita más de 20 universidades, recibe orientación personalizada y toma la mejor decisión para tu futuro.",
  keywords: ["tours universitarios", "universidades México", "orientación vocacional", "preparatoria"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
