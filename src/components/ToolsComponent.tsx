import { motion } from "framer-motion"
import { 
    FaReact, 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaGitAlt,
    FaNodeJs,
    FaChartBar
} from "react-icons/fa"
import { 
    SiTypescript, 
    SiTailwindcss, 
    SiNextdotjs,
    SiFlutter,
    SiDart,
    SiFramer,
    SiTrello,
    SiJirasoftware,
    SiPhp,
    SiLaravel,
    SiPostgresql,
    SiDocker,
    SiGithub,
    SiDjango,
    SiPython,
    SiFigma,
    SiBackstage,
} from "react-icons/si"
import { IconType } from "react-icons"

type Props = {
    id: number;
    label: string;
}

// Mapeamento de tecnologias para ícones (chaves normalizadas em minúsculas)
const techIcons: { [key: string]: IconType } = {
    "react": FaReact,
    "html": FaHtml5,
    "css": FaCss3Alt,
    "javascript": FaJs,
    "typescript": SiTypescript,
    "tailwind": SiTailwindcss,
    "next.js": SiNextdotjs,
    "nextjs": SiNextdotjs,
    "git": FaGitAlt,
    "github": SiGithub,
    "flutter": SiFlutter,
    "dart": SiDart,
    "framer motion": SiFramer,
    "framer": SiFramer,
    "kanban": SiTrello,
    "scrum": SiJirasoftware,
    "reducers": FaReact,
    "contexts": FaReact,
    "node.js": FaNodeJs,
    "nodejs": FaNodeJs,
    "php": SiPhp,
    "laravel": SiLaravel,
    "postgresql": SiPostgresql,
    "docker": SiDocker,
    "django": SiDjango,
    "python": SiPython,
    "figma": SiFigma,
    "backstage.io": SiBackstage,
    "backstage": SiBackstage,
    "power bi": FaChartBar,
    "git flow": FaGitAlt
};

export const ToolsComponent = ({ label, id }: Props) => {
    const normalizedLabel = label.trim().toLowerCase();
    const Icon = techIcons[normalizedLabel];
    
    return (
        <motion.div 
            key={id}
            className="rounded-lg text-xs sm:text-sm 
                     flex justify-center items-center gap-2 border-[1px] border-[#505252] 
                     py-[4px] px-3 bg-white dark:bg-[#151414] 
                     transition-all duration-300 cursor-default"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: id * 0.05 
            }}
        >
            {Icon && <Icon className="text-yellow-600 dark:text-yellow-400" size={16} />}
            <span className="text-gray-800 dark:text-gray-200 font-medium">
                {label}
            </span>
        </motion.div>
    )
}