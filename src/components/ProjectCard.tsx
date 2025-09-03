"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  title: string;
  description: string;
  techs: string[];
  site?: string;
  repo?: string;
  videos?: string[];
  images?: string[];
};

export default function ProjectCard({
  title,
  description,
  techs,
  site,
  repo,
  videos,
  images,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border p-5 shadow-sm bg-white dark:bg-zinc-800"
    >
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>

      <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
        {techs.map((t) => (
          <li
            key={t}
            className="rounded-full border px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200"
          >
            {t}
          </li>
        ))}
      </ul>

      {/* Swiper de vídeos */}
      {videos?.length ? (
        <div className="mt-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video rounded-lg object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}

      {/* Swiper de imagens */}
      {images?.length ? (
        <div className="mt-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`Screenshot de ${title} - ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}

      <div className="mt-4 flex gap-3">
        {site && (
          <Link
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            Preview
          </Link>
        )}
        {repo && (
          <Link
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            Código
          </Link>
        )}
      </div>
    </motion.div>
  );
}
