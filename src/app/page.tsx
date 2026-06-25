"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import Experience from "../components/Experience";

export default function Home() {
    const [showProjects, setShowProjects] = useState(false);
    const hasLoaded = useRef(false);

    const draw = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: ({i}: { i: number }) => {
        const delay = 1 + i * 0.5;
        return {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { delay, type: "spring", duration: 2.0, bounce: 0 },
            opacity: { delay, duration: 0.01 }
          }
        };
      }
    };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="mt-[12%] max-w-[90%] md:max-w-[60%] mx-auto w-full flex flex-row items-start justify-between gap-5" style={{ userSelect: "none" }}>
        {/* left column: all text content */}
        <div className="flex flex-col flex-1 min-w-0 mr-12">
          <motion.h1 className="text-3xl font-janitor text-[#2B2B2B]"
                     initial={{ transform: "translateX(-100px)", opacity: 0 }}
                     animate={{ transform: "translateX(0px)", opacity: 1}}
                     transition={{ type: "spring" }}
          >hello! i&#39;m</motion.h1>

          <motion.p
            className={`text-7xl font-dm-sans-black tracking-tighter text-[#2B2B2B] whitespace-nowrap ${showProjects ? "cursor-pointer hover:text-[#CB4A31] transition-colors duration-200" : ""}`}
            initial={{ transform: "translateY(10px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1}}
            transition={{delay: 0.5}}
            onClick={showProjects ? () => setShowProjects(false) : undefined}
          >Rachel Pu</motion.p>

          <AnimatePresence mode="wait">
            {!showProjects ? (
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              onAnimationComplete={() => { hasLoaded.current = true; }}
              >
                <motion.p className="text-lg font-product-sans text-[#2B2B2B] mt-8"
                          initial={{ transform: "translateY(10px)", opacity: 0 }}
                          animate={{ transform: "translateY(0px)", opacity: 1}}
                          transition={{delay: hasLoaded.current ? 0.1 : 1}}
                >{`I'm a software engineer at `}<a href="https://www.datadoghq.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[#2B2B2B]/30 hover:text-[#CB4A31] hover:decoration-[#CB4A31] transition-colors duration-200">Datadog</a>{` and a `}<a href="https://www.ufl.edu/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[#2B2B2B]/30 hover:text-[#CB4A31] hover:decoration-[#CB4A31] transition-colors duration-200">University of Florida</a>{` graduate of 2026 with a Bachelor of Science in Computer Science.`}</motion.p>

                <motion.p className="text-base font-product-sans text-[#2B2B2B]/50 mt-3"
                          initial={{ transform: "translateY(10px)", opacity: 0 }}
                          animate={{ transform: "translateY(0px)", opacity: 1 }}
                          transition={{delay: hasLoaded.current ? 0.1 : 1}}
                >volleyball enthusiast · foodie · artist</motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{delay: hasLoaded.current ? 0.2 : 1.3}}
                  className="mt-4"
                >
                  <button
                    onClick={() => setShowProjects(true)}
                    className="font-product-sans text-lg text-[#2B2B2B]/60 hover:text-[#CB4A31] transition-colors duration-200 underline underline-offset-4 decoration-[#2B2B2B]/20 hover:decoration-[#CB4A31]"
                  >
                    check out my work &rarr;
                  </button>
                </motion.div>

                <motion.div className="flex flex-row gap-6 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: hasLoaded.current ? 0.3 : 1.5 }}>
                  <a href="https://www.linkedin.com/in/rachel-pu-ufl/" target="_blank" rel="noopener noreferrer"
                     className="font-product-sans text-base text-[#2B2B2B]/60 hover:text-[#2B2B2B] transition-colors duration-200 underline underline-offset-4 decoration-[#2B2B2B]/20 flex items-center gap-1.5">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href="https://github.com/rachel-pu" target="_blank" rel="noopener noreferrer"
                     className="font-product-sans text-base text-[#2B2B2B]/60 hover:text-[#2B2B2B] transition-colors duration-200 underline underline-offset-4 decoration-[#2B2B2B]/20 flex items-center gap-1.5">
                    <SiGithub /> Github
                  </a>
                  <a href="mailto:rrachelypu@gmail.com"
                     className="font-product-sans text-base text-[#2B2B2B]/60 hover:text-[#2B2B2B] transition-colors duration-200 underline underline-offset-4 decoration-[#2B2B2B]/20 flex items-center gap-1.5">
                    <HiOutlineMail /> Email
                  </a>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Experience />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* bunny on the right */}
        <motion.svg
          className={`w-[300px] flex-shrink-0 hidden lg:block transition-opacity duration-300 ${showProjects ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          viewBox="0 0 600 650"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M132.133 297.31C132.133 257.918 131.905 218.52 132.133 179.129C132.424 128.832 129.601 72.3144 158.156 28.2404C170.27 9.54363 194.809 0.987818 212.113 18.6904C222.43 29.2438 220.781 51.9315 221.425 65.0076C222.843 93.8244 222.257 122.701 217.366 151.196C210.506 191.163 195.782 229.879 190.626 270.092C190.419 271.705 186.581 284.761 188.477 286.089C189.737 286.97 202.444 278.359 204.473 277.494C221.189 270.369 237.599 267.775 255.804 267.347C269.719 267.019 284.216 265.53 296.511 272.361C300.788 274.737 301.981 253.665 302.241 252.544C316.245 192.154 338.075 133.797 369.687 80.4069C381.019 61.2696 396.811 34.1964 417.556 23.8235C446.905 9.14914 446.111 64.9207 445.37 79.3325C442.49 135.363 415.554 179.447 385.683 224.253"
            stroke="#CB4A31" strokeWidth="17" fill="none" strokeLinecap="round" variants={draw} custom={2}
          />
          <motion.path
            d="M372.791 275.822C391.737 280.559 405.401 297.871 416.96 312.232C454.375 358.718 459.933 436.459 434.627 490.099C396.515 570.884 318.733 607.151 233.839 615.681C169.713 622.124 99.5031 620.587 45.2283 580.943C-8.58368 541.637 5.75605 464.052 35.4396 414.296C45.6819 397.128 58.7277 381.513 69.8194 364.876C72.2897 361.17 76.6409 358.873 78.4143 355.326"
            stroke="#CB4A31" strokeWidth="17" fill="none" strokeLinecap="round" variants={draw} custom={2}
          />
          <motion.path
            d="M268.519 456.007C268.519 432.359 265.524 403.679 291.646 392.113C308.562 384.622 336.749 380.379 353.037 391.397C357.663 394.526 361.135 399.496 365.077 403.437"
            stroke="#CB4A31" strokeWidth="17" fill="none" strokeLinecap="round" variants={draw} custom={0}
          />
          <motion.path
            d="M312.507 397C310.248 397.282 311.434 414.205 311.434 416.073C311.434 430.19 311.852 448.378 330.388 448.378C346.245 448.378 354.594 433.051 357.984 419.113C360.066 410.557 356.976 402.735 354.349 394.854"
            stroke="#CB4A31" strokeWidth="17" fill="none" strokeLinecap="round" variants={draw} custom={1}
          />
          <motion.path
            d="M64.6755 482.829C64.6755 474.509 62.3173 462.168 66.2251 454.458C74.0802 438.96 92.939 435.516 108.663 434.789C123.451 434.105 138.157 437.699 148.955 448.497C152.971 452.514 154.828 457.209 156.942 462.325C157.246 463.063 157.958 465.189 158.551 465.663C161.45 467.983 151.312 483.86 149.789 486.167C143.44 495.786 131.349 503.105 119.213 499.637C102.152 494.763 102.226 468.526 102.226 454.815C102.226 445.818 105.48 441.138 109.736 433.477"
            stroke="#CB4A31" strokeWidth="17" fill="none" strokeLinecap="round" variants={draw} custom={1}
          />
          <motion.path
            d="M324.051 391.513C324.051 400.762 321.563 410.168 333.926 410.168C342.998 410.168 351.385 400.872 350.325 415.715C349.624 425.532 340.172 435.405 330.147 435.405C323.476 435.405 318.418 426.065 321.429 420.043C325.177 412.548 336.121 415.056 336.121 423.396C336.121 428.142 334.768 432.309 329.537 428.822"
            stroke="#CB4A31" strokeWidth="17" fill="none" strokeLinecap="round" variants={draw} custom={1}
          />
          <motion.path
            d="M129.828 441.989C127.653 442.261 128.731 451.216 128.731 453.206C128.731 460.544 129.196 470.397 137.266 473.567C139.508 474.448 150.516 474.371 150.677 477.103C150.845 479.965 145.424 483.638 142.996 484.784C121.162 495.094 112.667 461.809 112.272 446.379C112.113 440.19 112.912 447.989 113.125 450.036C113.909 457.583 113.369 465.385 113.369 472.958C113.369 479.078 112.484 484.855 118.855 486.979"
            stroke="#CB4A31" strokeWidth="17" fill="none" strokeLinecap="round" variants={draw} custom={1}
          />
          <motion.path
            d="M222.328 558.129C239.12 558.129 259.369 559.456 259.369 537.757"
            stroke="#CB4A31" strokeWidth="17" fill="none" strokeLinecap="round" variants={draw} custom={1}
          />
        </motion.svg>
      </div>
    </div>
  );
}
