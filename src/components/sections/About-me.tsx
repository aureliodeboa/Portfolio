import { useTranslation } from "react-i18next";
import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandableText from '@/components/ExpandableText';
import { ScrollFloat } from "../ScrollFloat";
import InfiniteMenu from "../InfiniteMenu";
import { aboutmeData_pt } from "@/assets/data/aboutmeData-pt";
import { aboutmeData_en } from "@/assets/data/aboutmeData-en";


export const About_me = () => {
    const { t } = useTranslation();
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.3, // Considera "em vista" quando 30% da seção está visível
                rootMargin: '0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Troca do idioma dos itens "sobre mim"
    const aboutMeItems = t("current-language.locale") === "pt" ? aboutmeData_pt : aboutmeData_en;
    
    return (
        <section ref={sectionRef} id="about-me" className="relative flex bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white flex-col items-center w-full pt-20 h-auto gap-8 justify-around border-t-[1px] border-gray-800 border-solid overflow-hidden">
            {/* Partículas flutuantes */}
            <RandomParticles count={20} seed={101} />
           
            {/* Seção de texto sobre mim */}
            <ScrollFloat 
                className="h-1/2 px-8 sm:px-10 md:px-20 w-full max-w-4xl"
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

            {/* Infinite Menu Section */}
            <div className="relative w-full h-[100vh] sm:h-[90vh] md:h-[85vh] lg:min-h-[90vh] overflow-hidden bg-transparent">
                 <InfiniteMenu items={aboutMeItems}/>
                 
                 {/* Botão para próxima seção (apenas mobile) */}
                 <AnimatePresence>
                    {isInView && (
                        <motion.button
                            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ 
                                opacity: 1, 
                                y: 0
                            }}
                            exit={{ 
                                opacity: 0, 
                                y: 100 
                            }}
                            transition={{ 
                                duration: 0.4
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="font-semibold text-sm">Continuar para Experiências</span>
                           
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
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