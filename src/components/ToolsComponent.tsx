type Props = {
    id: number;
    label:string;
}

export const ToolsComponent = ({label,id}:Props)=>{
    return(
        <div key={id}  className=" shadow-md shadow-black dark:bg-[#151414] rounded-lg text-xs sm:text-sm flex justify-center items-center border-[1px] border-[#505252] hover:animate-bounce hover:shadow-xl  hover:shadow-black py-[4px] px-3 ">
            {label}
        </div>
    )
}