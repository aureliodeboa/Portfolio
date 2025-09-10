import { useTranslation } from "react-i18next";
import { ExperienceCard } from "../ExperienceCard";
import { experienceData_pt } from "@/assets/data/experienceData-pt";
import { experienceData_en } from "@/assets/data/experienceData-en";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandableText from '@/components/ExpandableText';

export const About_me = () => {
    const { t } = useTranslation();
    const [showAllExperiences, setShowAllExperiences] = useState(false);
    
    //faz a troca do idioma dos cards de experiencia
    let experienceData;
    t("current-language.locale") == "pt" ? experienceData = experienceData_pt : experienceData = experienceData_en;
    
    // Define quantas experiências mostrar inicialmente
    const initialExperiencesCount = 3;
    const displayedExperiences = showAllExperiences 
        ? experienceData 
        : experienceData.slice(0, initialExperiencesCount);
    
    // Textos para o botão baseado no idioma
    const buttonText = t("current-language.locale") == "pt" 
        ? (showAllExperiences ? "Ver menos" : "Ver mais") 
        : (showAllExperiences ? "See less" : "See more");
    
    return (
        <section id="about-me" className="relative flex bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white flex-col items-center w-full pt-12 h-auto gap-8 justify-around border-t-[1px] border-gray-800 border-solid overflow-hidden">
            {/* Gradiente de fundo com partículas */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-white/10 to-gray-100/20 dark:from-yellow-900/10 dark:via-transparent dark:to-orange-900/10"></div>
            
            {/* Partículas flutuantes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
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
           
            {/* Seção de texto sobre mim */}
            <motion.div 
                className="h-1/2 px-4 sm:px-10 md:px-20 w-full max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <motion.h1 
                    className="py-5 text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-black dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {t("about-me.title")}
                </motion.h1>
                <ExpandableText text={t("about-me.description")} maxLength={250} />
            </motion.div>
                        
            {/* Seção de experiências */}
            <motion.div 
                id="experience" 
                className="relative h-auto flex flex-col items-center py-10 gap-8 w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Linha pontilhada central */}
                <hr className="absolute w-[2px] left-1/2 transform -translate-x-1/2 h-full border-0 border-l-2 border-dotted border-black dark:border-white" />

                {/* Container das experiências */}
                <div className="w-full max-w-7xl px-4 sm:px-5 lg:px-10 xl:px-32 2xl:px-40">
                    <AnimatePresence mode="wait">
                        <div className="flex flex-col gap-8">
                            {displayedExperiences.map((experience, index) => (
                                <motion.div 
                                    key={experience.id} 
                                    className="w-full flex justify-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
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
                                </motion.div>
                            ))}
                        </div>
                    </AnimatePresence>
             </div>
            
                {/* Botão Ver mais/Ver menos */}
                {experienceData.length > initialExperiencesCount && (
                    <motion.div
                        className="mt-6 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            onClick={() => setShowAllExperiences(!showAllExperiences)}
                            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 relative z-10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {buttonText}
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};