import { useTranslation } from "react-i18next";
import { ExperienceCard } from "../ExperienceCard";
import { experienceData_pt } from "@/assets/data/experienceData-pt";
import { experienceData_en } from "@/assets/data/experienceData-en"

import ExpandableText from '@/components/ExpandableText';


export const About_me = () =>{
    
    const { t } = useTranslation();
    
    //faz a troca do idioma dos cards de experiencia
    let experienceData;
    t("current-language.locale")=="pt"?experienceData=experienceData_pt:experienceData=experienceData_en;
    
    return(
        <section  id="about-me" className="flex bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white flex-col items-center w-full  pt-12  h-auto gap-8  justify-around border-t-[1px] border-gray-800 border-solid ">
           
             <div className="h-1/2 px-4 sm:px-10 md:px-20  ">
                <h1 className="py-5 text-2xl md:text-3xl font-bold">{t("about-me.title")}</h1>
                <ExpandableText text={t("about-me.description")}  maxLength={250} />
             </div>
                        
             <div id="experience" className=" relative h-auto flex flex-row flex-wrap  justify-around py-10 gap-8 w-full items-center ">
                    {/*Linha solida lisa <hr className="absolute w-[2px] xl:left-[50%] bg-black h-full  dark:bg-white" />*/}
                    
                    {/* Linha pontilhada */}
                    <hr className="absolute w-[2px] xl:left-[50%] h-full border-0 border-l-2 border-dotted border-black dark:border-white" />

                    {experienceData.map((experience)=>(
                        <div key={experience.id} className={`w-full px-4 sm:px-5 lg:px-10  xl:px-32 flex justify-center    ${experience.id%2?'md:justify-start':'md:justify-end'}`}>
                             
                            
                            <ExperienceCard  id={experience.id} logoCompany={experience.logoCompany} titleCompany={experience.titleCompany} titleJob={experience.titleJob}
                            dateIn={experience.dateIn} dateOut={experience.dateOut} descriptionJob={experience.descriptionJob} usedtechnologies={experience.usedtechnologies}
                            key={experience.id} subtitleCompany={experience.subtitleCompany}
                        />
                            
                        </div>
                    ))}
                  
            
             </div>
            
        </section>
       
    )

}