import { useTranslation } from "react-i18next";
import { ExperienceCard } from "../ExperienceCard";
import { experienceData } from "@/assets/data/experienceData"
import { TimeLine } from "../TimeLine";
export const About_me = () =>{
    const { t } = useTranslation();
    return(
        <section className="flex flex-col items-center pt-8  h-auto gap-8  justify-around border-t-[1px] border-gray-800 border-solid ">
           
             <div className="h-1/2 px-4 sm:px-10 md:px-20  ">
                <h1 className="py-5 text-2xl">{t("about-me.title")}</h1>
                <p className="text-justify text-sm sm:text-base md:text-lg">{t("about-me.description")}</p>
             </div>
                        
             <div className=" relative h-auto flex flex-row flex-wrap  justify-around py-10 gap-4 w-full items-center ">
                    <TimeLine/>
                    {experienceData.map((experience)=>(
                        <div key={experience.id} className={`w-full px-4 sm:px-5 xl:px-20 flex justify-center  sm:justify-items-start  ${experience.id%2?'md:justify-start':'md:justify-end'}`}>
                             
                            
                            <ExperienceCard  id={experience.id} logoCompany={experience.logoCompany} titleCompany={experience.titleCompany} titleJob={experience.titleCompany}
                            dateIn={experience.dateIn} dateOut={experience.dateOut} descriptionJob={experience.descriptionJob} usedtechnologies={experience.usedtechnologies}
                            key={experience.id} subtitleCompany={experience.subtitleCompany}
                        />
                            
                        </div>
                    ))}
                  
            
             </div>
            
        </section>
       
    )

}