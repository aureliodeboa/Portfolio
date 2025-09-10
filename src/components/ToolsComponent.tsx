import { motion } from "framer-motion"

type Props = {
    id: number;
    label: string;
}

export const ToolsComponent = ({ label, id }: Props) => {
    return (
        <motion.div 
            key={id}
            className="shadow-md shadow-black dark:shadow-gray-800 rounded-lg text-xs sm:text-sm 
                     flex justify-center items-center border-[1px] border-[#505252] 
                     hover:shadow-xl hover:shadow-black dark:hover:shadow-gray-600 
                     py-[4px] px-3 bg-white dark:bg-[#151414] 
                     hover:bg-yellow-50 dark:hover:bg-yellow-900/20
                     transition-all duration-300 cursor-default"
            whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
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
            <span className="text-gray-800 dark:text-gray-200 font-medium">
                {label}
            </span>
        </motion.div>
    )
}