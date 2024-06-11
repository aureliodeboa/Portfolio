import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurélio Ribeiro",
  description: "Portifolio de Aurélio Ribeiro Graduando em Engenharia da computação, Desenvolvedor Front-End, Mobile e entusiasta na análise de dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
