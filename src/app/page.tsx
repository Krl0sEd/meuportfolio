import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "CultivaMente",
    description: "Plataforma educacional com mapa e recursos de acessibilidade.",
    techs: ["Next.js", "TypeScript", "Tailwind", "Leaflet"],
    site: "#",
    repo: "https://github.com/seu_usuario/seu_repo",
  },
  {
    title: "Portfolio v1",
    description: "Primeira versão do meu portfólio com animações.",
    techs: ["React", "Framer Motion", "Vite"],
    site: "#",
    repo: "#",
  },
];

export default function Page() {
  return (
    <>
      <Hero />

      <section id="about" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Sobre</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Desenvolvedor front-end com foco em experiências rápidas, acessíveis e responsivas.
            Trabalho com React, Next.js, TypeScript, Tailwind e integração com APIs.
          </p>
        </div>
      </section>

      <section id="projects" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Projetos</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Contato</h2>
          <p className="mt-3">
            Me mande um e-mail em{" "}
            <a className="underline" href="mailto:seuemail@exemplo.com">
              seuemail@exemplo.com
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
