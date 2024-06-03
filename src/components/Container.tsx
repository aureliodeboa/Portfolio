import { useTheme } from "@/contexts/ThemeContext"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Container = ({children}:Props)=>{
    const themeCtx =useTheme();
    return(
        <div
            className="w-full h-screen bg-white text-black dark:bg-gray-900 dark:text-white"
        >
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}