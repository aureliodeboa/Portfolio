import { projectType } from "@/types/projectType"
import { ToolsComponent } from "./ToolsComponent"


export const ProjectCard = (projectCardContent:projectType) =>{
    return(
        <div className="h-auto w-[90%]  md:w-[450px]  flex mx-3
          items-center flex-col  border-b-2  border-[#fff]  text-black dark:text-white bg-[#EEE] dark:bg-[#151414] drop-shadow-xl    gap-3 rounded-lg">
           <a href={projectCardContent.urlProject} rel="noopener" target="_blank"><img className="p-3 md:p-6 rounded-lg  " src={projectCardContent.imageProject?.src} alt="Imagem " /></a>
           <a href={projectCardContent.linkGithub} rel="noopener" target="_blank">

                <h1 className="text-sm sm:text-lg text-center px-3 md:text-3xl font-bold hover:text-[#AAA]">{projectCardContent.title}</h1>
            </a>
           <p className="text-xs sm:text-sm px-4 md:text-base md:px-6 text-justify">{projectCardContent.description}</p>
           <div className="p-3 flex flex-row gap-2 flex-wrap w-full items-center justify-center">
            {
                  projectCardContent.usedtechnologies.map((usedTechnologie,index)=>(
                    <ToolsComponent id={index}  key={index} label={usedTechnologie}/>
                  ))
            }
              
           </div>
        </div>
    )
}