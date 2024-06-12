import { useState } from "react";
import {useTranslation} from "react-i18next";

export const Switchlanguage = ()=>{
    const {i18n} = useTranslation();
    const[isSelected, setIsSelected]= useState(true);
    const handleToggle = () =>  {
        isSelected?setIsSelected(false):setIsSelected(true); //se brasil falso se ingles falso
        isSelected?i18n.changeLanguage('en'):i18n.changeLanguage('pt'); //seta o idioma

    };
    {/*!isSelected && <div className="absolute right-0 top-0 bottom-0 bg-black  text-white w-12   rounded-full py-2 text-xs transition duration-150 ease-in-out translate-x-full">US</div> */}

    return(
        <span className="w-20 h-[30px] m-3  flex-row  bg-black justify-center rounded-full text-black  text-xs text-center  relative cursor-pointer
        
        " onClick={handleToggle}>
          <div className="absolute bg-white h-full w-full text-black   rounded-2xl   text-xs  border-solid border-2 border-neutral-900 font-semibold "><span className="font-semibold  absolute left-0  mx-3 top-1/4">BR</span><span className=" font-semibold absolute right-0 mx-3 top-1/4">US</span></div>
         {<div className={`absolute ${isSelected?`translate-x-0`:`translate-x-3/4 `} dark:border-2  dark:border-gray-900 dark:border-solid  top-0 bottom-0 bg-black text-white w-12 transition-all duration-200   rounded-full flex justify-center items-center text-xs `}>{isSelected?'BR':'US'}</div>}
         
        </span>
    )
}