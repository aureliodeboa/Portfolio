import { useTranslation } from "react-i18next";

export const About_me = () =>{
    const { t } = useTranslation();
    return(
        <section className="flex flex-col items-center pt-8  h-lvh  px-28  justify-around border-t-[1px] border-gray-800 border-solid ">
         
             <div className="h-screen">
                <h1 className="py-5 text-2xl">{t("about-me.title")}</h1>
                <p className="text-justify">{t("about-me.description")}</p>
             </div>
            
        </section>
       
    )

}