import { useTranslation } from "react-i18next";
import { ExperienceCard } from "../ExperienceCard";
import { experienceData_pt } from "@/assets/data/experienceData-pt";
import { experienceData_en } from "@/assets/data/experienceData-en";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import ExpandableText from '@/components/ExpandableText';
import { ScrollFloat, ScrollFloatItem } from "../ScrollFloat";

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
            {/* Partículas flutuantes */}
            <RandomParticles count={20} seed={101} />
           
            {/* Seção de texto sobre mim */}
            <ScrollFloat 
                className="h-1/2 px-4 sm:px-10 md:px-20 w-full max-w-4xl"
                yOffset={60}
                rotateOffset={2}
                scaleOffset={0.05}
                delay={0.2}
            >
                <ScrollFloat 
                    className="py-5 flex items-center gap-3"
                    yOffset={40}
                    rotateOffset={1}
                    delay={0.4}
                >
                   
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-black dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">
                        {t("about-me.title")}
                    </h1>
                </ScrollFloat>
                <ExpandableText text={t("about-me.description")} maxLength={250} />
            </ScrollFloat>
                        
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

// Componente de partículas determinísticas para evitar mismatch de hidratação
const RandomParticles = ({ count, seed }: { count: number; seed: number }) => {
    const particles = useMemo(() => {
        const createSeededRandom = (s: number) => {
            let x = s >>> 0;
            return () => {
                x = (x * 1664525 + 1013904223) >>> 0;
                return x / 4294967296;
            }
        };
        const rand = createSeededRandom(seed);
        return Array.from({ length: count }).map(() => ({
            left: `${rand() * 100}%`,
            top: `${rand() * 100}%`,
            duration: 3 + rand() * 2,
            delay: rand() * 2
        }));
    }, [count, seed]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400/60 dark:bg-yellow-400/20 rounded-full"
                    style={{ left: p.left, top: p.top }}
                    animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
                />
            ))}
        </div>
    );
}