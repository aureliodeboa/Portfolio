import { ProjectCard } from "../ProjectCard";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
//import os dados dos projetos
import { projectData_pt } from "@/assets/data/projectsData-pt";
import { projectData_en } from "@/assets/data/projectsData-en";


export const Projects = () => {
  //função para pegar o tamanho da tela e retornar a quantidade dos cards

  const getSlidesPerView = () => {
    //o primeiro if resolve o problema do window undefined
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1720) {
      
        return 4;
      } else if (window.innerWidth > 1000) {
        return 3;
      } else if (window.innerWidth > 600) {
        return 2;
      } else {
        return 1;
      }
    }
   
  };

  //useState para a quantidade de cards  que seram mostrados 
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  //effect para fazer a mudança quantidade de cards toda vez que  o tamanho da tela mudar
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener('resize', handleResize);

    //cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
          <h1 className="text-3xl md:text-5xl px-4 py-5 sm:px-10 md:px-20 leading-10 font-bold text-left bg-gradient-to-r from-yellow-400 to-black dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">
            {t("projects.title")}
          </h1>
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
            modules={[Pagination, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={slidesPerView}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 4.5,
            }}
            className="w-full"
          >
            {
              currentProjectData?.map((projectData, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 80
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                  >
                    <ProjectCard 
                      id={projectData.id} 
                      title={projectData.title} 
                      description={projectData.description} 
                      linkGithub={projectData.linkGithub}
                      usedtechnologies={projectData.usedtechnologies} 
                      imageProject={projectData.imageProject} 
                      urlProject={projectData.urlProject} 
                    />
                  </motion.div>
                </SwiperSlide>
              ))
            }
            
            <div className="relative slider-controler flex flex-row justify-center items-center gap-2 mt-8 w-full h-8">
              <div className="absolute swiper-pagination"></div>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};


