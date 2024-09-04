import { VscGithubInverted,VscGithubAlt } from "react-icons/vsc";
import { SiLinkedin,SiSpotify } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { ButtonMidia } from "../ButtonMidia";
import { BsDownload } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import imageProfile from "@/assets/images/profile.jpg"
import { BsChevronDoubleDown } from "react-icons/bs";
import { useEffect } from "react";
import { motion } from "framer-motion";





export const Profile = () =>{
    const { t } = useTranslation();
    //para que quando a pagina abra ela vá para o inicio
    useEffect(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "https://aureliodeboa.github.io/Portfolio/aurelio_ribeiro.pdf"// O nome que o arquivo terá ao ser baixado
        link.target = '_blank';
        link.click();

        // Remover o link temporário
        URL.revokeObjectURL(link.href);
      };
    
      const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/aurelioribeiro/', '_blank');
      };
    
      const handleGitHub = () => {
        window.open('https://github.com/aureliodeboa', '_blank');
      };
    
      const handleEmail = () => {
        window.location.href = 'mailto:aurelio74123@gmail.com';
      };

     
    return(
        <section id='home' className="relative flex flex-col justify-center min-h-dvh  pt-20  xl:flex-row  gap-6  lg:px-28 lg:flex-row w-full px-5 content-center items-center">
            <motion.span
             whileHover={{ scale: 1.15}}
             whileTap={{
                 scale: 1,
                 rotate: -5,
                 borderRadius: "100%"
               }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 30
              }}

             className="flex justify-center  xl:ml-2  lg:ml-8"><img className="shadow-sm shadow-black  dark:shadow-yellow-600 rounded-[80%] lg:rounded-[50px] h-[250px] w-[250px]   lg:mt-0 md:h-[300px] md:w-[300px] " src={imageProfile.src} alt='imagem aurelio' /></motion.span>

            <div className="relative flex-1 flex-col  justify-center  text-center xl:text-start lg:text-start">
                <span className="w-full text-wrap flex flex-col justify-center">
                    <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl">{t("profileSection.title")}</h1>
                    <h3 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-2xl">{t("profileSection.subtitle")}</h3>
                    <p className="mt-2 pr-4 text-sm sm:text-base md:px-16 lg:px-0 md:text-lg w-5/4 text-center lg:text-start">{t("profileSection.description")}</p> 
                </span>

                <div className="flex flex-row justify-center lg:justify-start  items-center mr-1 h-20 w-full">
                    <ButtonMidia clickAction={handleDownload}><span className="h-[30px] sm:flex flex-row justify-around hidden p-1 mr-1">{t("profileSection.curriculum")}</span><span className=" mt-[2px] sm:size-[25px] flex justify-center items-center"><BsDownload size={"27px"} /></span></ButtonMidia>
                    <ButtonMidia clickAction={handleLinkedIn}><SiLinkedin size={"30px"} /></ButtonMidia>
                    <ButtonMidia clickAction={handleGitHub}><VscGithubInverted size={"30px"} /></ButtonMidia>
                    <ButtonMidia clickAction={handleEmail}><LuMail size={"30px"} /></ButtonMidia>
                    
                    
                    
                 </div>
                     
            </div>
           
            <span className="animate-bounce bottom-0 absolute lg:bottom-4   "><BsChevronDoubleDown size={"30px"}/></span>   
        </section>
    )
}