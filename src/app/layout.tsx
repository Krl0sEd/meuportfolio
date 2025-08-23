import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Seu Nome — Portfólio",
  description: "Portfólio profissional.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-white">
        <Navbar />
        {children}
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500">
            © {new Date().getFullYear()} Seu Nome. Feito com Next.js.
          </div>
        </footer>
      </body>
    </html>
  );
}
