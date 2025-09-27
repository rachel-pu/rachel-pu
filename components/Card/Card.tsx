'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  i: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  logo: string;
  projectImage: string;
  url: string;
  color: string;
  progress: any;
  range: number[];
  targetScale: number;
}

const Card = ({i, title, company, duration, description, technologies, logo, projectImage, url, color, progress, range, targetScale}: CardProps) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const scale = useTransform(progress, range, [1, targetScale]);

  const handleLinkClick = () => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}}
        className={styles.card}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h2 className="font-satoshi-bold text-white text-3xl mb-2">{title}</h2>
            <h3 className="font-product-sans text-white text-xl mb-1 opacity-90">
              {company}
            </h3>
            <p className="font-product-sans text-white text-base opacity-75">
              {duration}
            </p>
          </div>

          <div className="w-20 h-20 flex items-center justify-center bg-opacity-15 rounded-xl ml-6 overflow-hidden">
            {logo ? (
              <Image
                src={`/${logo}`}
                alt={`${company} logo`}
                width={60}
                height={60}
                className="object-contain"
              />
            ) : (
              <div className="text-white opacity-60 text-2xl font-satoshi-bold">
                {i + 1}
              </div>
            )}
          </div>
        </div>

        <div className={styles.description}>
          <p className="font-product-sans text-white leading-relaxed text-base">
            {description}
          </p>
        </div>

         <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
            >
              {projectImage ? (
                <Image
                  fill
                  src={`/${projectImage}`}
                  alt={`${title} project screenshot`}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white opacity-40 text-center">
                    <div className="text-sm font-product-sans">Project Image</div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>


        <div className={styles.techSection}>
          <div className={styles.techContainer}>
            {technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={styles.techBadge}
              >
                {tech}
              </span>
            ))}
            {url && url !== '#' && (
              <div className={styles.linkButton} onClick={handleLinkClick}>
                ↗
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card