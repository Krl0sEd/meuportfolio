"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

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
          Olá, pode me chamar de{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Carlos Bucazio
          </span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-lg text-zinc-600 dark:text-zinc-300"
        >
          Desenvolvedor em formação, com foco em Full-Stack e criação de
          soluções web modernas e eficientes. Atualmente cursando Análise e
          Desenvolvimento de Sistemas (ADS) e estudos de desenvolvimento
          Front-End profissional. Apaixonado por aprender novas tecnologias e
          explorar áreas como Full-Stack e Análista de Dados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex gap-3"
        >
          <a
            href="/CarlosBucazioCurriculo.pdf"
            download="CarlosBucazioCurriculo.pdf"
            className="flex items-center gap-2 rounded-lg border border-black px-4 py-2 
             text-sm font-medium text-black transition duration-300 
             hover:bg-purple-600 hover:text-white 
             dark:border-white dark:text-white dark:hover:bg-purple-500"
          >
            <FiDownload /> Baixar CV
          </a>

          <a
            href="https://github.com/Krl0sEd"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-lg border border-black px-4 py-2 
             text-sm font-medium text-black transition duration-300 
             hover:bg-purple-600 hover:text-white 
             dark:border-white dark:text-white dark:hover:bg-purple-500"
          >
            <FiGithub /> GitHub
          </a>
          
          <a
            href="https://www.linkedin.com/in/carlos-eduardo-de-oliveira-bucazio-516a7937a"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-lg border border-black px-4 py-2 
             text-sm font-medium text-black transition duration-300 
             hover:bg-purple-600 hover:text-white 
             dark:border-white dark:text-white dark:hover:bg-purple-500"
          >
            <FiLinkedin /> Linkedin
          </a>
        </motion.div>
      </div>
    </section>
  );
}
