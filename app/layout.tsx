import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Substitua pelo link exato gerado pela Vercel na Etapa 1
  metadataBase: new URL("https://portfolio-tia-milly.vercel.app"),
  title: "Tia Milly | Pintura Facial Infantil em Aracaju",
  description:
    "Diversão e muita criatividade para a criançada! Pintura facial profissional com tintas seguras e laváveis para festas infantis e eventos em Aracaju - SE.",
  openGraph: {
    title: "Tia Milly | Pintura Facial Infantil",
    description:
      "Deixe a imaginação ganhar cor! Solicite um orçamento para festas infantis, eventos e ensaios.",
    url: "/",
    siteName: "Tia Milly Pintura Facial",
    images: [
      {
        url: "/galeria/foto-esposa.jpeg",
        width: 800,
        height: 800,
        alt: "Tia Milly - Pintura Facial Infantil",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tia Milly | Pintura Facial Infantil",
    description:
      "Diversão e muita criatividade para a criançada! Tintas seguras e laváveis para festas e eventos.",
    images: ["/galeria/foto-esposa.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}