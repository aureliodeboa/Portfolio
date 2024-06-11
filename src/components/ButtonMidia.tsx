import { ReactNode } from "react"
type Props = {
    children: ReactNode
    clickAction: ()=>void
}


export const ButtonMidia = ({children}:Props)=>{
    return(
        <button className=" rounded-md m-[2px] p-2 bg-[#FFFFFF] text-black dark:bg-[#1E1E1E] dark:text-white flex flex-row justify-center">
            {children}
        </button>
    )
        
}