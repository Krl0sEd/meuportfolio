"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

const links = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#home" className="font-bold tracking-tight">
          Carlos Eduardo de Oliveira Bucazio
        </Link>

        {/* Botão Hamburger */}
        <button
          className="rounded-lg border px-3 py-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open ? "true" : "false"} // ✅ TypeScript e ARIA corretos
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          ☰
        </button>

        {/* Links principais (desktop) */}
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <Link href={l.href} className="hover:underline">
                {l.label}
              </Link>
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-[2px] w-full"
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-zinc-200/60 dark:border-zinc-800 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
