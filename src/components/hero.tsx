"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          Olá, eu sou <span className="text-purple-600 dark:text-purple-400">Seu Nome</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-lg text-zinc-600 dark:text-zinc-300"
        >
          Dev Front-end focado em React, Next.js, TypeScript e Tailwind.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 flex gap-3">
          <a href="/CV.pdf" className="rounded-xl bg-black px-4 py-2 text-white dark:bg-white dark:text-black">Baixar CV</a>
          <a href="https://github.com/seu_usuario" target="_blank" className="rounded-xl border px-4 py-2" rel="noopener">GitHub</a>
        </motion.div>
      </div>
    </section>
  );
}
