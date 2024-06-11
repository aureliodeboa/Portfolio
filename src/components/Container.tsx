import { useTheme } from "@/contexts/ThemeContext"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Container = ({children}:Props)=>{
    const themeCtx =useTheme();
    return(
        <div className="w-full h-screen bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white flex flex-col justify-center" >
            {children}
        </div>
    )
}