import { link } from "fs"
import { Buttonavbar } from "./Buttonavbar"
import { ButtonTheme } from "./ButtonTheme"
import { Switchlanguage } from "./Switchlanguage"
import { useState } from "react"


export const Navbar =()=> {

    let Links= [
        {name:"Inicio", _onClink:()=>{}},
        {name:"Sobre mim", _onClink:()=>{}},
        {name:"Experiencia", _onClink:()=>{}},
        {name:"Projetos", _onClink:()=>{}},
        {name:"Contato", _onClink:()=>{}},
    ]
    let[openMenu,setOpenMenu]=useState(false);

    return(
        <nav className=" fixed top-0  w-full flex flex-col-reverse md:flex-row justify-around  border-b-[0.5px] border-gray-200 dark:border-gray-800 bg-white dark:bg-[#09090B]">
            <div className="hidden min-w-48  lg:flex justify-center content-center  items-center text-sm md:text-xl lg:text-xl font-bold "> {"<"}<span className="text-yellow-300">/</span>{"> "}Aurelio Ribeiro</div> 
            
             <ul className={`${openMenu?'':'hidden'}  md:flex md:items-center mb-1 mt-6 md:mt-2 md:static  w-full md:w-auto md:pl-0 pl-9 `}> 
                 {
                     Links.map((link)=>(
                            <li key={link.name} className="items-center justify-center flex"> 
                             <Buttonavbar  label={link.name} _onClick={link._onClink} />
                            </li>                          
                     ))
                 }
                  
             </ul>
             
            <div className="flex justify-around sm:justify-items-end md:justify-items-end lg:justify-center md:w-80 ">
                <Switchlanguage/>
                <ButtonTheme/>
                <button type="button" title="menu-mobile" onClick={()=>setOpenMenu(!openMenu)} className="w-8 justify-self-end md:hidden  flex  h-[30px] my-2 cursor-pointer"> 
                    
                    <svg xmlns="http://www.w3.org/2000/svg"  className={openMenu?'hidden':''} viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className={openMenu?'':'hidden'} viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/></svg>
                </button>
               
            </div>

          
           
            
           

            
        </nav>
    )
}