import { link } from "fs"
import { ButtonLink } from "./ButtonLink"
import { ButtonTheme } from "./ButtonTheme"
import { Switchlanguage } from "./Switchlanguage"
import { useState } from "react"
import {  useTranslation } from "react-i18next"
import { IoIosMenu, IoMdClose } from "react-icons/io"


export const Navbar =()=> {
    const { t } = useTranslation();
    let Links= [
        {name:t("navLinks.start"), _onClink:()=>{}},
        {name:t("navLinks.about-me"), _onClink:()=>{}},
        {name:t("navLinks.experience"), _onClink:()=>{}},
        {name:t("navLinks.projects"), _onClink:()=>{}},
        {name:t("navLinks.contact"), _onClink:()=>{}},
    ]
    let[openMenu,setOpenMenu]=useState(false);

    return(
        <nav className=" fixed top-0  w-full flex flex-col-reverse md:flex-row justify-around  border-b-[0.5px] border-gray-200 dark:border-gray-800 bg-white dark:bg-[#09090B]">
            <div className="hidden min-w-48  lg:flex justify-center content-center  items-center text-sm md:text-xl lg:text-xl font-bold "> {"<"}<span className="text-yellow-300">/</span>{"> "}Aurelio Ribeiro</div> 
            
             <ul className={`${openMenu?'':'hidden'}  md:flex md:items-center mb-1 mt-6 md:mt-2 md:static  w-full md:w-auto md:pl-0 pl-9 `}> 
                 {
                     Links.map((link)=>(
                            <li key={link.name} className="items-center justify-center flex"> 
                             <ButtonLink  label={link.name} _onClick={link._onClink} />
                            </li>                          
                     ))
                 }
                  
             </ul>
             
            <div className="flex justify-around sm:justify-items-end md:justify-items-end lg:justify-between md:w-80 ">
                <Switchlanguage/>
                <ButtonTheme/>
                <button type="button" title="menu-mobile" onClick={()=>setOpenMenu(!openMenu)} className="w-8 justify-self-end md:hidden  flex  h-[30px] my-2 cursor-pointer"> 
                
                <IoIosMenu className={`${openMenu?' hidden':''} `} size={"32px"}  />
                <IoMdClose className={`${openMenu?'':'hidden'} `} size={"30px"} />

                   
                </button>
               
            </div>

          
           
            
           

            
        </nav>
    )
}