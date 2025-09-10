import { SiLinkedin } from "react-icons/si"
import { ButtonMidia } from "../ButtonMidia"
import { LuMail } from "react-icons/lu"
import { SendEmail } from "../SendEmail"
import { useTranslation } from "react-i18next";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaCode, FaRocket } from "react-icons/fa";



export const Contact = () =>{
    const { t } = useTranslation();
    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/aurelioribeiro/', '_blank');
      };
    const handleEmail = () => {
        window.location.href = 'mailto:aurelio74123@gmail.com';
      };
    return(
        <section  id="contact" className="h-auto pt-14  w-full flex items-center justify-center bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white">
                <div className="h-auto w-[98%] flex flex-col md:flex-row border-black dark:border-white  rounded-xl border-[1px]  py-6 px-4 sm:px-10 md:px-20 ">
                    <div className="flex flex-col h-auto  md:w-1/2  text-justify py-4  gap-6">
                        <div className="flex items-center gap-3">
                            <HiOutlineSparkles className="text-yellow-400 text-2xl" />
                            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-black dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">{t("contact.title")}</h1>
                        </div>
                        <p className=" text-sm md:text-base w-full text-justify md:w-2/3 leading-relaxed">{t("contact.description")}</p>
                        
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-4">
                                <ButtonMidia clickAction={handleLinkedIn}><SiLinkedin size={"30px"} /></ButtonMidia>
                                <ButtonMidia clickAction={handleEmail}><LuMail size={"30px"} /></ButtonMidia>
                            </div>
                            
                            <div className="flex items-center gap-4 mt-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <FaCode className="text-yellow-400" />
                                    <span>Desenvolvimento</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <FaRocket className="text-orange-400" />
                                    <span>Inovação</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                                "Vamos criar algo incrível juntos! 💫"
                            </p>
                        </div>
                     </div>
                    <SendEmail/>
                </div>
        </section>
    )
}