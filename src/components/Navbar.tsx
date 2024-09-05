import { link } from "fs"
import { ButtonLink } from "./ButtonLink"
import { ButtonTheme } from "./ButtonTheme"
import { Switchlanguage } from "./Switchlanguage"
import { useState } from "react"
import {  useTranslation } from "react-i18next"
import { IoIosMenu, IoMdClose } from "react-icons/io"
import { motion } from "framer-motion";

  

export const Navbar =()=> {
    const { t } = useTranslation();
    let Links= [
        {name:t("navLinks.start"), _onClink:()=>document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) },
        {name:t("navLinks.projects"), _onClink:()=>document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start'  }) },
        {name:t("navLinks.about-me"), _onClink:()=>document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth', block: 'start'  }) },
        {name:t("navLinks.experience"), _onClink:()=>document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start'  }) },
        {name:t("navLinks.contact"), _onClink:()=> document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start'  }) },

    ]
    let[openMenu,setOpenMenu]=useState(false);
    
    return(
        <motion.nav 
        initial={{y:-11, opacity:0}}
           animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              
              ease: [0, 0.71, 0.2, 1.01]
            }}
        
        className=" fixed top-0  w-full flex flex-col-reverse md:flex-row  md:justify-around   border-b-[0.5px] border-gray-200 dark:border-gray-800 bg-white dark:bg-[#09090B] z-20">
            <div className="hidden min-w-48  lg:flex justify-center content-center  items-center text-sm md:text-xl lg:text-xl font-bold "> {"<"}<span className="text-yellow-300">/</span>{"> "}Aurelio Ribeiro</div> 
            
            
            <ul className={`${openMenu?'':'hidden'}  md:flex md:items-center mb-1 mt-6 md:mt-2 md:static  w-full md:w-auto md:pl-0 pl-9` }> 
                 {
                     Links.map((link)=>(
                            <li key={link.name} className="items-center justify-center flex"> 
                             <ButtonLink  label={link.name} _onClick={link._onClink} />
                            </li>                          
                     ))
                 }
            </ul>
             
            <div className="flex  justify-around sm:justify-items-end md:justify-items-end lg:justify-between md:w-80 ">
                <Switchlanguage/>
                <ButtonTheme/>
                <button type="button" title="menu-mobile" onClick={()=>setOpenMenu(!openMenu)} className="w-8 justify-self-end md:hidden mx-6  flex  h-[30px] my-2 cursor-pointer"> 
                
                <IoIosMenu className={`${openMenu?' hidden':''} `} size={"32px"}  />
                <IoMdClose className={`${openMenu?'':'hidden'} `} size={"30px"} />

                   
                </button>
               
            </div>

          
           
            
           

            
        </motion.nav>
    )
}