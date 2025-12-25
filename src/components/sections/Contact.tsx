import { SiLinkedin } from "react-icons/si"
import { ButtonMidia } from "../ButtonMidia"
import { LuMail } from "react-icons/lu"
import { SendEmail } from "../SendEmail"
import { useTranslation } from "react-i18next";
import { HiOutlineSparkles } from "react-icons/hi2";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";



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
                <div className="h-auto w-[98%] flex flex-col md:flex-row md:items-stretch border-black dark:border-white  rounded-xl border-[1px]  py-6 px-4 sm:px-10 md:px-10 ">
                    <div className="flex flex-col  flex-1 h-full md:w-1/2 text-justify py-4">
                        <div className="flex items-center gap-3">
                            {/* <HiOutlineSparkles className="text-yellow-400 text-2xl" /> */}
                            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-black dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">{t("contact.title")}</h1>
                        </div>
                        <p className=" text-sm md:text-base w-full text-justify md:w-2/3 py-4 leading-relaxed">{t("contact.description")}</p>
                        
                        <div className="flex flex-row gap-4">
                            <ButtonMidia clickAction={handleLinkedIn}><SiLinkedin size={"30px"} /></ButtonMidia>
                            <ButtonMidia clickAction={handleEmail}><LuMail size={"30px"} /></ButtonMidia>
                        </div>

                        <div className="mt-6 w-full flex-1 flex items-end">
                            <DotLottieReact
                                src="https://lottie.host/64cf7ae3-3c40-4c7f-b1d9-8617da08d441/OGD2PyfXwb.lottie"
                                loop
                                autoplay
                                className="w-full h-full"
                            />
                        </div>  
                     </div>
                    <SendEmail/>
                </div>
        </section>
    )
}
