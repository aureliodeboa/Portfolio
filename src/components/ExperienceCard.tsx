import { ExperienceCardType } from "@/types/ExperienceCardType"
import { experienceData } from "@/assets/data/experienceData"
//experienceCardContent:ExperienceCardType[]
import i9logo from "@/assets/images/logo_i9.png"
import { ToolsComponent } from "./ToolsComponent"

export const ExperienceCard= (experienceCardContent:ExperienceCardType)=>{
    return(
        <div className="relative h-auto w-[450px]   bg-[#151414] border-b-4  border-[#a18b32f6] hover:shadow-xl hover:shadow-[#241d15] transition-shadow ease-in-out  flex flex-col rounded-[20px] justify-between">
            <div className="m-3">
                 <div className=" flex flex-row p-2">
                    <img className="rounded-sm mr-2 h-20 " src={experienceCardContent.logoCompany?.src} alt="" />
                    <div className="flex flex-col gap-[1px]">
                        <h1 className="text-2xl font-bold ">{experienceCardContent.titleCompany}</h1>
                        <h3 className="text-sm">{experienceCardContent.subtitleCompany}</h3>
                        <h6 className="text-xs">{experienceCardContent.dateIn.toDateString() +"-"+ experienceCardContent.dateOut?.toString()}</h6>
                    </div>
                 </div>

                 <div className="m-3 flex flex-col justify-around gap-2">
                    <h1 className="text-base font-bold">{experienceCardContent.titleJob}</h1>
                    
                        <ul className="text-sm flex flex-col gap-2 list-disc p-3  ">
                            {
                                experienceCardContent.descriptionJob.map((description,index)=>(
                                    <li key={index}>
                                       {description}
                                    </li>
                                ))
                            }
                        </ul>
                 </div>
            </div>
            <div className="flex flex-row flex-wrap gap-2 justify-center items-center bottom-8 p-4 ">

                    {
                        experienceCardContent.usedtechnologies.map((usedTechnologie)=>(
                            <ToolsComponent label={usedTechnologie}/>
                        ))
                    }
                  
                 </div>
                  {/* triangulo que aparece do lado direito somente quando xl caso contrario fica oculto o segund span é o triangulo do lado esquerdo*/}
                    <span className={`${experienceCardContent.id%2?'md:flex':''} hidden  absolute -right-7 top-3 rounded-md  border-solid border-l-[#181616b7] border-l-[30px] border-y-transparent border-y-[30px] border-r-0`}></span>
                    <span className={`${experienceCardContent.id%2?'sm:flex md:hidden':'sm:flex'} hidden  absolute -left-7 top-3 border-solid border-r-[#181616b7] border-r-[30px] border-y-transparent border-y-[30px] border-l-0`}></span>
        </div>
    )
}