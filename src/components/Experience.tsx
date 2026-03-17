import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    role: 'Estagiário de TI',
    company: 'UPGRADE TI - Soluções em TI para Empresas',
    type: 'Estágio • Híbrido',
    period: 'Jan de 2026 - o momento',
    location: 'Rio de Janeiro, Brasil',
    description: [
      'Administração de usuários e controle de acesso via Active Directory (IAM) e aplicação de políticas de segurança (GPOs) em ambiente Windows Server.',
      'Suporte técnico N1/N2 e troubleshooting de hardware, redes e sistemas operacionais (Windows/Linux).',
      'Monitoramento de ativos de rede e servidores, visando a prevenção de incidentes.',
    ],
    skills: [
      'Linux',
      'Docker',
      'Active Directory',
      'Windows Server',
      'Troubleshooting',
    ],
  },
  {
    role: 'Aprendiz (Setor TI)',
    company: 'RioSaúde (Hospital Municipal Ronaldo Gazolla)',
    type: 'Aprendiz • Presencial',
    period: 'Mar de 2025 - Dez de 2025',
    location: 'Rio de Janeiro, Brasil',
    description: [
      'Atuação no departamento de Tecnologia da Informação em ambiente hospitalar de alta criticidade. Esta experiência consolidou minha base técnica em Infraestrutura e Redes, pilares para minha transição para DevOps e Cloud Computing.',
      '⚙️ Sustentação de Operações (Ops): Garantia da disponibilidade de sistemas críticos e hardware, atuando na resolução ágil de incidentes.',
      '🌐 Redes e Conectividade: Suporte à infraestrutura de redes (TCP/IP, cabeamento estruturado e configuração de hosts).',
      '🖥️ Gestão de Ativos & Hardware: Manutenção preventiva e corretiva de estações de trabalho.',
      '🔀 Otimização de Processos: Identificação de gargalos operacionais no suporte, aplicando lógica de melhoria contínua (conceito chave de DevOps).',
    ],
    skills: [
      'Infraestrutura',
      'TCP/IP',
      'Sistemas Operacionais',
      'Atendimento',
      'Hardware',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-10 text-3xl font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-3">
          <FiBriefcase className="text-purple-500" />
          Experiência Profissional
        </h2>

        <div className="relative border-l border-zinc-200 dark:border-zinc-700 ml-3 md:ml-0">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-8 md:ml-10">
              {/* Bolinha da linha do tempo */}
              <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 ring-4 ring-white dark:ring-zinc-900"></span>

              {/* Cabeçalho da Experiência */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400">
                    {exp.company}
                  </h4>
                </div>

                {/* Metadados (Data, Local, Tipo) */}
                <div className="mt-2 md:mt-0 flex flex-col md:items-end text-sm text-zinc-500 dark:text-zinc-400 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <FiCalendar />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiMapPin />
                    <span>
                      {exp.location} • {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Descrição em parágrafos */}
              <div className="text-zinc-600 dark:text-zinc-300 space-y-3 mb-5">
                {exp.description.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags de Competências (Skills) */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-zinc-200 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
