import Image from 'next/image';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certifications = [
  {
    title: 'Cisco Networking Academy - Introduction to Cybersecurity',
    issuer: 'Cisco',
    date: '2026',
    link: 'https://www.credly.com/badges/8d4787d4-426d-44c4-a57d-fb6aefa8456e/linked_in_profile',
    image: '/badges/cisco.png', // <-- Caminho da imagem
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'Em andamento',
    link: '#',
    image: '/badges/az900.png',
  },
  {
    title: 'Git e GitHub do básico ao avançado',
    issuer: 'Udemy',
    date: '2026',
    link: '#',
    image: '/badges/udemy.png',
  },
  {
    title: 'Python3 - Do básico ao avançado',
    issuer: 'Udemy',
    date: '2026',
    link: '#',
    image: '/badges/udemy.png',
  },
  {
    title: 'Crie um site simples usando HTML, CSS e JavaScript',
    issuer: 'Fundação Bradesco',
    date: '2026',
    link: 'https://www.ev.org.br',
    image: '/badges/bradesco.png',
  },
];

export default function Certifications() {
  return (
    <section
      id="certificacoes"
      className="py-16 bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
          <FiAward className="text-blue-500" />
          Certificações
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-500 dark:border-zinc-800 dark:bg-zinc-800/50"
            >
              <div className="flex items-center gap-4">
                {/* 1. Imagem da Badge (Esquerda) */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800 p-2">
                  <Image
                    src={cert.image}
                    alt={`Badge ${cert.issuer}`}
                    width={50}
                    height={50}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* 2. Textos (Meio - flex-grow empurra o link pra direita) */}
                <div className="flex-grow">
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>

                {/* 3. Botão de Link (Direita) */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-zinc-400 hover:text-blue-500 transition-colors"
                  aria-label="Ver certificado"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>

              {/* Detalhe estético no hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
