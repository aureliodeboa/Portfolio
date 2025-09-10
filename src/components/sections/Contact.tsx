import { SiLinkedin } from "react-icons/si"
import { ButtonMidia } from "../ButtonMidia"
import { LuMail } from "react-icons/lu"
import { SendEmail } from "../SendEmail"
import { useTranslation } from "react-i18next";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



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
                    <div className="flex flex-col h-auto  md:w-1/2  text-justify py-4  gap-4">
                        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-black dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">{t("contact.title")}</h1>
                        <p className=" text-sm md:text-base w-full text-justify md:w-2/3 ">{t("contact.description")}</p>
                        <div className="flex flex-row ">
                            <ButtonMidia clickAction={handleLinkedIn}><SiLinkedin size={"30px"} /></ButtonMidia>
                            <ButtonMidia clickAction={handleEmail}><LuMail size={"30px"} /></ButtonMidia>
                        </div>
                        <div className="flex justify-center items-center  w-full h-full">
                        <DotLottieReact
                            className="w-full h-full "
                            src="https://lottie.host/61465e93-dab0-4bd1-9799-ad373164ffce/FEeG9RBHHh.json"
                            loop
                            autoplay
                            
                            /> 
                        </div>
                        
                       
                           
                     </div>
                    <SendEmail/>
                </div>
        </section>
    )
}