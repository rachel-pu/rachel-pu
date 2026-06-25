"use client";

import { motion } from "framer-motion";
import { experiences } from "../data/experience";

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-3"
    >
      <div className="flex items-baseline justify-between">
        <h3 className="font-satoshi-bold text-[#2B2B2B] text-2xl leading-tight">
          {experience.title}
        </h3>
        <p className="font-product-sans text-[#2B2B2B]/50 text-sm">
          {experience.duration}
        </p>
      </div>

      <p className="font-product-sans text-[#2B2B2B]/70 text-lg">
        {experience.company}
      </p>

      <p className="font-product-sans text-[#2B2B2B]/60 text-base leading-relaxed">
        {experience.description}
      </p>

      {experience.links.length > 0 && (
        <div className="flex gap-4 mt-1">
          {experience.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-product-sans text-sm text-[#2B2B2B]/50 hover:text-[#CB4A31] transition-colors duration-200 underline underline-offset-4 decoration-[#2B2B2B]/20 hover:decoration-[#CB4A31]"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[700px] mx-auto">
        <div className="flex flex-col gap-16">
          {experiences.map((experience, i) => (
            <ExperienceCard key={experience.company + experience.title} experience={experience} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
