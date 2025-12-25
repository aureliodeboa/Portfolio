import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceCard } from "../ExperienceCard";
import { experienceData_pt } from "@/assets/data/experienceData-pt";
import { experienceData_en } from "@/assets/data/experienceData-en";
import { ScrollFloatItem } from "../ScrollFloat";

export const Experience = () => {
  const { t } = useTranslation();
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  // troca o idioma dos cards de experiência
  const experienceData =
    t("current-language.locale") == "pt"
      ? experienceData_pt
      : experienceData_en;

  const initialExperiencesCount = 3;
  const displayedExperiences = showAllExperiences
    ? experienceData
    : experienceData.slice(0, initialExperiencesCount);

  const buttonText =
    t("current-language.locale") == "pt"
      ? showAllExperiences
        ? "Ver menos"
        : "Ver mais"
      : showAllExperiences
        ? "See less"
        : "See more";

  const experienceHeader =
    t("current-language.locale") == "pt"
      ? {
          title: "Experiência",
          description:
            "Alguns momentos da minha jornada profissional e o que aprendi em cada etapa.",
        }
      : {
          title: "Experience",
          description:
            "A snapshot of my professional journey and what I learned along the way.",
        };

  return (
    <section
      id="experience"
      className="relative flex bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white flex-col items-center w-full pt-12 h-auto gap-8 justify-around border-t-[1px] border-gray-800 border-solid overflow-hidden"
    >
      <motion.div
        className="relative h-auto flex flex-col items-center py-10 gap-8 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <ScrollFloatItem
          className="w-full flex justify-center"
          yOffset={30}
          rotateOffset={1}
          scaleOffset={0.02}
          delay={0.2}
        >
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-black dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">
              {experienceHeader.title}
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-3">
              {experienceHeader.description}
            </p>
          </div>
        </ScrollFloatItem>

        {/* Linha pontilhada central */}
        <hr className="absolute w-[2px] left-1/2 transform -translate-x-1/2 h-full border-0 border-l-2 border-dotted border-black dark:border-white" />

        {/* Container das experiências */}
        <div className="w-full max-w-7xl px-4 sm:px-5 lg:px-10 xl:px-32 2xl:px-40">
          <AnimatePresence mode="wait">
            <div className="flex flex-col gap-8">
              {displayedExperiences.map((experience, index) => (
                <ScrollFloatItem
                  key={experience.id}
                  className="w-full flex justify-center"
                  yOffset={40}
                  rotateOffset={2}
                  scaleOffset={0.04}
                  delay={index * 0.1}
                >
                  <ExperienceCard
                    id={experience.id}
                    logoCompany={experience.logoCompany}
                    titleCompany={experience.titleCompany}
                    titleJob={experience.titleJob}
                    dateIn={experience.dateIn}
                    dateOut={experience.dateOut}
                    descriptionJob={experience.descriptionJob}
                    usedtechnologies={experience.usedtechnologies}
                    subtitleCompany={experience.subtitleCompany}
                  />
                </ScrollFloatItem>
              ))}
            </div>
          </AnimatePresence>
        </div>

        {/* Botão Ver mais/Ver menos */}
        {experienceData.length > initialExperiencesCount && (
          <ScrollFloatItem
            className="mt-6 relative z-10"
            yOffset={30}
            rotateOffset={1}
            scaleOffset={0.02}
            delay={0.8}
          >
            <motion.button
              onClick={() => setShowAllExperiences(!showAllExperiences)}
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText}
            </motion.button>
          </ScrollFloatItem>
        )}
      </motion.div>
    </section>
  );
};

