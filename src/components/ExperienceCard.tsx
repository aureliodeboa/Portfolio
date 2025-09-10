import { ExperienceCardType } from "@/types/ExperienceCardType"
import { ToolsComponent } from "./ToolsComponent"
import { useTranslation } from "react-i18next";

export const ExperienceCard= (experienceCardContent:ExperienceCardType)=>{
    const { t } = useTranslation();
    let currentLanguage;
    t("current-language.locale")=="pt"?currentLanguage={"and":"e","currently":"atualmente","month":"mes","months":"meses","year":"ano","years":"anos"}:currentLanguage={"and":"and","currently":"currently","month":"month","months":"months","year":"year","years":"years"};
    let isCurrentJob = () => {
        // Função para saber a data de hoje
        let Today = new Date();
    
        // Convertendo a data de hoje e a data de saída para apenas ano, mês e dia
        let todayDateOnly = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate());
        let dateOutDateOnly = new Date(experienceCardContent.dateOut.getFullYear(), experienceCardContent.dateOut.getMonth(), experienceCardContent.dateOut.getDate());
    
        // Variáveis para armazenar datas de entrada e saída
        let dateIn = new Date(experienceCardContent.dateIn);
        let dateOut;
    
        // Verificar se a data de hoje é igual à data de saída
        if (todayDateOnly.getTime() === dateOutDateOnly.getTime()) {
            dateOut = todayDateOnly;
        } else {
            
            dateOut = dateOutDateOnly;
        }
    
        // Calculando a diferença em meses e anos
        let totalMonths = (dateOut.getFullYear() - dateIn.getFullYear()) * 12 + dateOut.getMonth() - dateIn.getMonth();
        let years = Math.floor(totalMonths / 12);
        let months = totalMonths % 12;
    
        // Compondo a string de retorno com base no tempo percorrido
        let timeElapsed;
        if (years === 0) {
            timeElapsed = months + (months === 1 ? ` ${currentLanguage.month} `: ` ${currentLanguage.months} ` );
        } else {
            timeElapsed = years + (years === 1 ? ` ${currentLanguage.year} `: ` ${currentLanguage.years} `) + ` ${currentLanguage.and} `+ months + (months === 1 ? ` ${currentLanguage.month} ` : ` ${currentLanguage.months} `);
        }
    
        // Retornando a string apropriada
        if (todayDateOnly.getTime() === dateOutDateOnly.getTime()) {
            return `${currentLanguage.currently} - ` + timeElapsed;
        } else {
            return (dateOut.getMonth() + 1) + "/" + dateOut.getFullYear() + " - " + timeElapsed;
        }
    };
        
    return(
        <div key={experienceCardContent.id} className="relative h-auto md:w-[50%] lg:w-[60%] xl:w-[70%] w-[450px] text-black dark:text-white bg-[#EEEE] dark:bg-[#151414] border-b-4  border-[#f7c617f6] dark:border-[#a18b32f6]  hover:shadow-xl shadow-xl hover:shadow-[#e0b583] dark:hover:shadow-[#f7c71723]  transition-shadow ease-in-out  flex flex-col rounded-[20px] justify-between">
            <div className="m-3">
                 <div className=" flex flex-row p-3">
                    <img className="rounded-sm mr-3 h-24 lg:h-28 " src={experienceCardContent.logoCompany?.src} alt="" />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold ">{experienceCardContent.titleCompany}</h1>
                        <h3 className="text-sm sm:text-base lg:text-lg">{experienceCardContent.subtitleCompany}</h3>
                        <h6 className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 ">{ experienceCardContent.dateIn.getMonth()+"/"+experienceCardContent.dateIn.getFullYear()+" - "+ isCurrentJob()}</h6>
                    </div>
                 </div>

                 <div className="m-4 flex flex-col justify-around gap-3">
                    <h1 className="text-lg lg:text-xl font-bold">{experienceCardContent.titleJob}</h1>
                    
                        <ul className="text-sm lg:text-base flex flex-col gap-3 list-disc p-4  ">
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
            <div className="flex flex-row flex-wrap gap-3 justify-center items-center bottom-8 p-5 ">

                    {
                        experienceCardContent.usedtechnologies.map((usedTechnologie,index)=>(
                            <ToolsComponent key={index} id={index} label={usedTechnologie}/>
                        ))
                    }
                  
                 </div>
                   
        </div>
    )
}