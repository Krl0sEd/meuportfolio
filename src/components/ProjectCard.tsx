"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  techs: string[];
  site?: string;
  repo?: string;
};

export default function ProjectCard({ title, description, techs, site, repo }: Props) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-2xl border p-5 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>

      <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
        {techs.map((t) => (
          <li key={t} className="rounded-full border px-2 py-1">{t}</li>
        ))}
      </ul>

      <div className="mt-4 flex gap-3">
        {site && <Link href={site} target="_blank" className="text-sm underline">Preview</Link>}
        {repo && <Link href={repo} target="_blank" className="text-sm underline">Código</Link>}
      </div>
    </motion.div>
  );
}
