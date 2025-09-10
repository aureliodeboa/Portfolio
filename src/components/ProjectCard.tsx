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
                     hover:shadow-2xl transition-all duration-300 overflow-hidden
                     backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
            whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
            }}
            transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
            }}
        >
            {/* Container da imagem com overlay */}
            <div className="relative group overflow-hidden rounded-lg">
                <a href={projectCardContent.urlProject} rel="noopener" target="_blank">
                    <motion.img 
                        className="p-3 md:p-6 rounded-lg w-full h-auto transition-transform duration-300 group-hover:scale-105" 
                        src={projectCardContent.imageProject?.src} 
                        alt={`Imagem do projeto ${projectCardContent.title}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </a>
                
                {/* Overlay com botões */}
                <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 
                             flex items-center justify-center gap-4 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    <motion.a 
                        href={projectCardContent.urlProject} 
                        rel="noopener" 
                        target="_blank"
                        className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaExternalLinkAlt className="text-black dark:text-white" size={20} />
                    </motion.a>
                    <motion.a 
                        href={projectCardContent.linkGithub} 
                        rel="noopener" 
                        target="_blank"
                        className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub className="text-black dark:text-white" size={20} />
                    </motion.a>
                </motion.div>
            </div>

            {/* Título do projeto */}
            <motion.a 
                href={projectCardContent.linkGithub} 
                rel="noopener" 
                target="_blank"
                className="w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                <h1 className="text-sm sm:text-lg text-center px-3 md:text-2xl font-bold 
                              hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300
                              bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 
                              bg-clip-text text-transparent">
                    {projectCardContent.title}
                </h1>
            </motion.a>

            {/* Descrição do projeto */}
            <motion.p 
                className="text-xs sm:text-sm px-4 md:text-base md:px-6 text-justify 
                         text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
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
        </motion.div>
    )
}