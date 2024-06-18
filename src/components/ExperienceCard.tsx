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
        <div key={experienceCardContent.id} className="relative h-auto md:w-[40%] w-[400px] text-black dark:text-white bg-[#EEEE] dark:bg-[#151414] border-b-4  border-[#f7c617f6] dark:border-[#a18b32f6]  hover:shadow-xl shadow-xl hover:shadow-[#e0b583] dark:hover:shadow-[#f7c71723]  transition-shadow ease-in-out  flex flex-col rounded-[20px] justify-between">
            <div className="m-3">
                 <div className=" flex flex-row p-2">
                    <img className="rounded-sm mr-2 h-20 " src={experienceCardContent.logoCompany?.src} alt="" />
                    <div className="flex flex-col gap-[2px]">
                        <h1 className="text-xl sm:text-2xl font-bold ">{experienceCardContent.titleCompany}</h1>
                        <h3 className="text-[12px] sm:text-sm">{experienceCardContent.subtitleCompany}</h3>
                        <h6 className="text-[10px] sm:text-xs text-gray-700 dark:text-gray-400 ">{ experienceCardContent.dateIn.getMonth()+"/"+experienceCardContent.dateIn.getFullYear()+" - "+ isCurrentJob()}</h6>
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
                        experienceCardContent.usedtechnologies.map((usedTechnologie,index)=>(
                            <ToolsComponent key={index} id={index} label={usedTechnologie}/>
                        ))
                    }
                  
                 </div>
                   {/* triangulo que aparece do lado direito somente quando xl caso contrario fica oculto o segund span é o triangulo do lado esquerdo*/}
                    <span className={`${experienceCardContent.id%2?'md:flex':''} hidden  absolute -right-7 top-3 rounded-md  border-solid dark:border-l-[#181616b7] border-l-[30px] border-y-transparent border-y-[30px] border-r-0`}></span>
                    <span className={`${experienceCardContent.id%2?'md:hidden':'md:flex'} hidden  absolute -left-7 top-3 border-solid dark:border-r-[#181616b7] border-r-[30px] border-y-transparent border-y-[30px] border-l-0`}></span>

                    {/*Botao da time-line dos cards do lado esquerdo*/}
                    <span className={`${experienceCardContent.id%2?'md:flex ':''} hidden absolute top-9 -right-[26.8%] rounded-full w-4 h-4 bg-black dark:bg-white`}></span>
                    {/*Botao da time-line dos cards do lado direito                    */}
                    <span className={`${experienceCardContent.id%2?'':'md:flex'} hidden absolute top-9 right-[123.3%] rounded-full w-4 h-4 bg-black dark:bg-white`}></span>
                   
        </div>
    )
}