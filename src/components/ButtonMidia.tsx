import { motion } from "framer-motion"
import { ReactNode } from "react"
type Props = {
    children: ReactNode
    clickAction: ()=>void
}


export const ButtonMidia = ({children, clickAction}:Props)=>{
    return(
        <motion.button onClick={clickAction} 
        whileHover={{ scale: 1.2}}
        whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
        className=" rounded-md m-[2px] p-2 bg-[#ffffff] border border-black dark:border-[#1E1E1E] text-black dark:bg-[#1E1E1E] dark:text-white flex flex-row justify-center">
            {children}
        </motion.button>
    )
        
}