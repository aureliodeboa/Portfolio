import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react"

export const ButtonTheme = ()=>{

    const themeCtx = useTheme();

    const setTheme = (theme:string) =>{
        if(themeCtx){
            themeCtx.setTheme(theme);
        }
    }
    return(
        <div className="w-10 cursor-pointer flex justify-center items-center  p-2">

          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-110 transition-all dark:-rotate-90 dark:scale-0"
            onClick={()=>setTheme("dark")}
          />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-110"
           onClick={()=>setTheme("light")}
          />
          
        </div>
    )
}

