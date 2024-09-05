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
import { DotLottieReact } from "@lottiefiles/dotlottie-react";



export const Profile = () =>{
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
      const link = document.createElement('a');
      link.href = "https://aureliodeboa.github.io/Portfolio/aurelio_ribeiro.pdf"
      link.target = '_blank';
      link.click();
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
      <section id='home' className="
      bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white
      relative flex flex-col justify-center min-h-dvh pt-20 xl:flex-row gap-6 lg:px-28 lg:flex-row w-full px-5 content-center items-center">
          
          <DotLottieReact
                            className="h-full w-full absolute z-10 "
                            src="https://lottie.host/9daab01c-1c5b-4ae7-88dc-603042f0f3c9/fJjC9kMpej.json"
                            loop
                            autoplay
                            speed={0.8}
                            
                            /> 
           
          <motion.span
           initial={{scale:0, opacity:0}}
           animate={{ opacity: 1, scale: 1,rotate:360 }}
            transition={{
              duration: 0.8,
              delay: 0.01,
              ease: [0, 0.71, 0.2, 1.01]
            }}
           whileHover={{ scale: 1.15 }}
           whileTap={{
               scale: 1,
               rotate: -5,
               borderRadius: "100%"
             }}
            
           className="flex justify-center xl:ml-2 lg:ml-8 z-10"> {/* Add z-10 to ensure it's above the background */}
              <img className="shadow-sm shadow-black dark:shadow-yellow-600 rounded-[80%] lg:rounded-[50px] h-[250px] w-[250px] lg:mt-0 md:h-[300px] md:w-[300px]" src={imageProfile.src} alt='imagem aurelio' />
          </motion.span>

          <motion.div 
          initial={{scale:0, opacity:0}}
          animate={{ opacity: 1, scale: 1,rotate:360 }}
           transition={{
             duration: 0.8,
             delay: 0.5,
             ease: [0, 0.71, 0.2, 1.01]
           }}
          
          className="relative flex-1 flex-col justify-center text-center xl:text-start lg:text-start z-10"> {/* z-10 here as well */}
              <span className="w-full text-wrap flex flex-col justify-center">
                  <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl">{t("profileSection.title")}</h1>
                  <h3 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-2xl">{t("profileSection.subtitle")}</h3>
                  <p className="mt-2 pr-4 text-sm sm:text-base md:px-16 lg:px-0 md:text-lg w-5/4 text-center lg:text-start">{t("profileSection.description")}</p> 
              </span>

              <div className="flex flex-row justify-center lg:justify-start items-center mr-1 h-20 w-full">
                  <ButtonMidia clickAction={handleDownload}>
                      <span className="h-[30px] sm:flex flex-row justify-around hidden p-1 mr-1">{t("profileSection.curriculum")}</span>
                      <span className="mt-[2px] sm:size-[25px] flex justify-center items-center">
                          <BsDownload size={"27px"} />
                      </span>
                  </ButtonMidia>
                  <ButtonMidia clickAction={handleLinkedIn}><SiLinkedin size={"30px"} /></ButtonMidia>
                  <ButtonMidia clickAction={handleGitHub}><VscGithubInverted size={"30px"} /></ButtonMidia>
                  <ButtonMidia clickAction={handleEmail}><LuMail size={"30px"} /></ButtonMidia>
              </div>
                   
          </motion.div>
         
          <motion.span 
          initial={{scale:10, opacity:0 , }}
          animate={{ opacity: 1, scale: 1,}}
           transition={{
             duration: 1,
             delay: 2,
             ease: [0, 0.71, 0.2, 1.01]
           }}
          className="animate-bounce bottom-0 absolute lg:bottom-4 z-10">
              <BsChevronDoubleDown size={"30px"} />
          </motion.span>   
      </section>
  );
}
