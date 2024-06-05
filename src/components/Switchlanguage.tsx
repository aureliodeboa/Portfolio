import { useState } from "react"

export const Switchlanguage = ()=>{
    const[isSelected, setIsSelected]= useState(true)
    const handleToggle = () =>  isSelected?setIsSelected(false):setIsSelected(true);
    {/*!isSelected && <div className="absolute right-0 top-0 bottom-0 bg-black  text-white w-12   rounded-full py-2 text-xs transition duration-150 ease-in-out translate-x-full">US</div> */}

    return(
        <span className="w-20 m-3  flex-row bg-black justify-center rounded-full text-black  text-xs text-center  relative cursor-pointer" onClick={handleToggle}>
          <div className="absolute  bg-white h-full w-full text-black   rounded-2xl   text-xs  border-solid border-2 border-neutral-900 font-semibold "><span className="font-semibold  absolute left-0  mx-3 top-1/4">BR</span><span className=" font-semibold absolute right-0 mx-3 top-1/4">US</span></div>
         {<div className={`absolute ${isSelected?`translate-x-0`:`translate-x-3/4 `} top-0 bottom-0 bg-black text-white w-12 transition-all duration-200   rounded-full py-2 text-xs `}>{isSelected?'BR':'US'}</div>}
         
        </span>
    )
}