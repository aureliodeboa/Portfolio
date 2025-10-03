import { ProjectCard } from "../ProjectCard";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

//import os dados dos projetos
import { projectData_pt } from "@/assets/data/projectsData-pt";
import { projectData_en } from "@/assets/data/projectsData-en";


export const Projects = () => {
  // Estado para detectar se é mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // até 1024px é considerado "mobile"
    };

    handleResize(); // chama uma vez
    window.addEventListener("resize", handleResize); // escuta mudanças
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //faz a troca do idioma dos cards de experiencia
  const { t } = useTranslation();
   
  let currentProjectData;
  t("current-language.locale")=="pt"?currentProjectData=projectData_pt:currentProjectData=projectData_en;
 

  return (
    <section id="projects" className="relative h-auto py-16 flex flex-col items-center bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white w-full overflow-hidden">
      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/60 dark:bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 mt-7 h-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 80
          }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 px-4 sm:px-10 md:px-20 py-5">
    
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-black dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">
              {t("projects.title")}
            </h1>
          </div>
          <motion.h6 
            className="pt-5 px-4 sm:px-10 md:px-20 text-base md:text-lg text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
          >
            {t("projects.description")}
          </motion.h6>
        </motion.div>

        <motion.div 
          className="flex justify-center h-auto items-center w-full mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 80
          }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={!isMobile} // apenas ativa o loop se NÃO for mobile
            coverflowEffect={{
              rotate: 3,
              stretch: 0,
              depth: 120,
              modifier: 3.2,
              slideShadows: true,
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1720: { slidesPerView: 4 },
            }}
            className="w-full h-full px-2"
          >
            {
              currentProjectData?.map((projectData, index) => (
                <SwiperSlide key={index} className="flex justify-center px-2">
                  <ProjectCard 
                    id={projectData.id} 
                    title={projectData.title} 
                    description={projectData.description} 
                    linkGithub={projectData.linkGithub}
                    usedtechnologies={projectData.usedtechnologies} 
                    imageProject={projectData.imageProject} 
                    urlProject={projectData.urlProject} 
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};


