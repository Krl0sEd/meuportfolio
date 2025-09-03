"use client";

import Hero from "@/components/hero";
import Image from "next/image";
import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useState } from "react";

// Tipagem mais clara
type Project = {
  title: string;
  description: string;
  techs: string[];
  site: string;
  repo: string;
  videos?: string[];
  images?: string[];
};

const projects: Project[] = [
  {
    title: "Projeto - Lootsy",
    description: "Site de vendas e revendas de jogos.",
    techs: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    site: "https://krl0sed.github.io/Projeto---Faculdade/",
    repo: "https://github.com/Krl0sEd/Projeto---Faculdade",
    videos: ["/ProjetoLootsy1.mp4", "/ProjetoLootsy2.mp4", "/ProjetoLootsy3.mp4"],
  },
  {
    title: "CultivaMente",
    description: "Plataforma de ONG educacional com mapa e recursos de acessibilidade.",
    techs: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    site: "https://cultivamenteofc.com.br",
    repo: "https://github.com/Krl0sEd/Projeto-Cultiva-Mente",
    videos: ["/CultivaMente1.mp4", "/CultivaMente2.mp4", "/CultivaMente3.mp4"],
  },
  {
    title: "Meu Portfólio",
    description: "Minha primeira versão do meu portfólio com animações.",
    techs: ["HTML5", "CSS3", "TypeScript", "React/Next", "Framer Motion", "Vite", "Tailwind"],
    site: "http://localhost:3000",
    repo: "https://github.com/Krl0sEd/meuportfolio",
    images: ["/MeuPortfolio1.png", "/MeuPortfolio2.png", "/MeuPortfolio3.png"],
  },
];

// --- COMPONENTE ProjectCard ---
function ProjectCard({ title, description, techs, site, repo, images, videos }: Project) {
  const media = images || videos || [];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === media.length - 1 ? 0 : i + 1));

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl dark:bg-zinc-800">
      {/* Carrossel */}
      <div className="relative flex h-56 w-full items-center justify-center bg-zinc-200 dark:bg-zinc-700">
        {media.length > 0 ? (
          <>
            {images ? (
              <Image
                src={media[index]}
                alt={`${title} preview`}
                width={800}
                height={450}
                priority={index === 0} // melhora performance no Vercel
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                src={media[index]}
                className="h-full w-full object-cover"
                loop
                muted
                controls
              />
            )}

            {media.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Imagem anterior"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={next}
                  aria-label="Próxima imagem"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                >
                  <FiChevronRight />
                </button>
              </>
            )}
          </>
        ) : (
          <span className="text-zinc-500">Sem preview</span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-grow flex-col p-5">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h3>
        <p className="mt-2 flex-grow text-sm text-zinc-600 dark:text-zinc-300">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4 text-lg">
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar site de ${title}`}
            className="flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            <FiExternalLink /> Site
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver repositório de ${title}`}
            className="flex items-center gap-1 text-zinc-700 hover:underline dark:text-zinc-300"
          >
            <FiGithub /> Repo
          </a>
        </div>
      </div>
    </article>
  );
}

// --- PÁGINA PRINCIPAL ---
export default function Page() {
  return (
    <>
      <Hero />

      {/* SOBRE */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Sobre</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            Apaixonado por tecnologia e aprendizado constante, atuo como desenvolvedor em formação com foco em
            Full-Stack. Meu objetivo é criar experiências digitais intuitivas e acessíveis, explorando ferramentas como
            React, Next.js, TypeScript, Tailwind e Bootstrap. Acredito que código bem escrito pode transformar ideias em
            impacto real.
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projects" className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-zinc-800 dark:text-zinc-100">Projetos</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Contato</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Me mande um e-mail em{" "}
            <a
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
              href="mailto:carloseduardobucazio@gmail.com"
            >
              carloseduardobucazio@gmail.com
            </a>
          </p>

          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            Ou entre em contato pelo telefone:{" "}
            <a
              href="tel:+5521999524185"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              +55 (21) 99952-4185
            </a>
          </p>

          {/* Ícones sociais */}
          <div className="mt-6 flex justify-center gap-6 text-2xl text-zinc-700 dark:text-zinc-300">
            <a
              href="https://github.com/Krl0sEd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black dark:hover:text-white"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/carloseduardobucazio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiLinkedin />
            </a>
            <a href="/CV_CarlosEduardo.pdf" download aria-label="Baixar currículo" className="hover:text-green-600 dark:hover:text-green-400">
              <FiDownload />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
