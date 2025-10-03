import { projectType } from "@/types/projectType"
import { ToolsComponent } from "./ToolsComponent"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export const ProjectCard = (projectCardContent: projectType) => {
    return (
        <motion.div 
            className="h-auto w-[90%] md:w-[450px] flex mx-3 items-center flex-col 
                     border-b-2 border-yellow-600 text-black dark:text-white 
                     bg-[#EEE] dark:bg-[#151414] gap-3 rounded-lg shadow-lg 
                     transition-all duration-300 overflow-hidden
                     backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 pb-4"
            transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
            }}
        >
            {/* Container da imagem */}
            <div className="relative overflow-hidden rounded-t-lg w-full">
                <motion.img 
                    className="p-3 md:p-6 rounded-lg w-full h-auto transition-transform duration-300" 
                    src={projectCardContent.imageProject?.src} 
                    alt={`Imagem do projeto ${projectCardContent.title}`}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Título do projeto */}
            <motion.div 
                className="w-full"
                transition={{ type: "spring", stiffness: 400 }}
            >
                <h1 className="text-sm sm:text-lg text-center px-3 md:text-2xl font-bold 
                              bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 
                              bg-clip-text text-transparent">
                    {projectCardContent.title}
                </h1>
            </motion.div>

            {/* Descrição do projeto */}
            <motion.p 
                className="text-xs sm:text-sm px-4 md:text-base md:px-6 text-justify 
                         text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
            >
                {projectCardContent.description}
            </motion.p>

            {/* Container das tecnologias */}
            <motion.div 
                className="p-3 flex flex-row gap-2 flex-wrap w-full items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {
                    projectCardContent.usedtechnologies.map((usedTechnologie, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <ToolsComponent id={index} label={usedTechnologie} />
                        </motion.div>
                    ))
                }
            </motion.div>

            {/* Botões de ação */}
            <motion.div 
                className="flex flex-row gap-4 w-full items-center justify-center px-4 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                {/* Botão GitHub */}
                <motion.a 
                    href={projectCardContent.linkGithub} 
                    rel="noopener" 
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-2.5 bg-gray-800 dark:bg-gray-700 
                             text-white rounded-lg shadow-md 
                             transition-all duration-300 text-sm font-medium
                             border-2 border-transparent"
                    whileTap={{ scale: 0.95 }}
                >
                    <FaGithub size={18} />
                    <span>GitHub</span>
                </motion.a>

                {/* Botão do Projeto - apenas se urlProject existir */}
                {projectCardContent.urlProject && (
                    <motion.a 
                        href={projectCardContent.urlProject} 
                        rel="noopener" 
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-2.5 
                                 bg-gradient-to-r from-yellow-500 to-yellow-600 
                                 dark:from-yellow-600 dark:to-yellow-700
                                 text-white rounded-lg shadow-md 
                                 transition-all duration-300 text-sm font-medium
                                 "
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaExternalLinkAlt size={16} />
                        <span>Ver Projeto</span>
                    </motion.a>
                )}
            </motion.div>
        </motion.div>
    )
}