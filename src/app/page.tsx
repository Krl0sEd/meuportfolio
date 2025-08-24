import Hero from "@/components/hero";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "CultivaMente",
    description: "Plataforma de ONG educacional com mapa e recursos de acessibilidade.",
    techs: ["HTML5", "CSS3", "JavaScript", "Boostrap"],
    site: "https://cultivamenteofc.com.br",
    repo: "https://github.com/Krl0sEd/Projeto-Cultiva-Mente",
  },
  {
    title: "Meu Portfólio",
    description: "Minha primeira versão do meu portfólio com animações.",
    techs: ["HTML5", "CSS3", "TypeScript", "React/Next", "Framer Motion", "Vite", "Tailwind"],
    site: "http://localhost:3000",
    repo: "https://github.com/Krl0sEd/meuportfolio",
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
            Apaixonado por tecnologia e aprendizado constante, atuo como desenvolvedor em formação com foco em Full-Stack. 
            Meu objetivo é criar experiências digitais intuitivas e acessíveis, explorando ferramentas diversas como React, Next.js, TypeScript, Tailwind e Boostrap.
             Acredito que código bem escrito pode transformar ideias em impacto real.
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
              carloseduardobucazio@gmail.com
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
