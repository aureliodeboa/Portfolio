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
import { StarrySky } from "../StarrySky";



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
      relative flex flex-col justify-center min-h-dvh pt-20 xl:flex-row gap-6 lg:px-28 lg:flex-row w-full px-5 content-center items-center overflow-hidden">
          
          {/* Céu estrelado animado */}
          <StarrySky />
           
          <motion.span
           initial={{scale:0, opacity:0, y: 100, rotateY: -180}}
           animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100
            }}
           whileHover={{ 
             scale: 1.1, 
             rotateY: 10,
             boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
           }}
           whileTap={{
               scale: 0.95,
               rotateY: -5
             }}
            
           className="flex justify-center xl:ml-2 lg:ml-8 z-20 relative"> {/* Add z-20 to ensure it's above the background */}
              <motion.img 
                className="shadow-sm shadow-black dark:shadow-yellow-600 rounded-[80%] lg:rounded-[50px] h-[250px] w-[250px] lg:mt-0 md:h-[300px] md:w-[300px]" 
                src={imageProfile.src} 
                alt='imagem aurelio'
                initial={{filter: "blur(10px)"}}
                animate={{filter: "blur(0px)"}}
                transition={{duration: 0.8, delay: 1.5}}
              />
          </motion.span>

          <motion.div 
          initial={{x: -100, opacity:0, scale: 0.8}}
          animate={{ opacity: 1, x: 0, scale: 1 }}
           transition={{
             duration: 1,
             delay: 0.8,
             ease: [0.25, 0.46, 0.45, 0.94],
             type: "spring",
             stiffness: 80
           }}
          
          className="relative flex-1 flex-col justify-center text-center xl:text-start lg:text-start z-20"> {/* z-20 here as well */}
              <span className="w-full text-wrap flex flex-col justify-center">
                  <motion.h1 
                    className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-orange-500 bg-clip-text text-transparent"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 1.2}}
                  >
                    {t("profileSection.title")}
                  </motion.h1>
                  <motion.h3 
                    className="font-medium text-lg sm:text-xl md:text-2xl lg:text-2xl mt-2"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 1.4}}
                  >
                    {t("profileSection.subtitle")}
                  </motion.h3>
                  <motion.p 
                    className="mt-2 pr-4 text-sm sm:text-base md:px-16 lg:px-0 md:text-lg w-5/4 text-center lg:text-start"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 1.6}}
                  >
                    {t("profileSection.description")}
                  </motion.p> 
              </span>

              <motion.div 
                className="flex flex-row justify-center lg:justify-start items-center mr-1 h-20 w-full"
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 1.8}}
              >
                  <motion.div
                    whileHover={{scale: 1.1, y: -5}}
                    whileTap={{scale: 0.95}}
                    transition={{type: "spring", stiffness: 300}}
                  >
                    <ButtonMidia clickAction={handleDownload}>
                        <span className="h-[30px] sm:flex flex-row justify-around hidden p-1 mr-1">{t("profileSection.curriculum")}</span>
                        <span className="mt-[2px] sm:size-[25px] flex justify-center items-center">
                            <BsDownload size={"27px"} />
                        </span>
                    </ButtonMidia>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{scale: 1.1, y: -5}}
                    whileTap={{scale: 0.95}}
                    transition={{type: "spring", stiffness: 300}}
                  >
                    <ButtonMidia clickAction={handleLinkedIn}><SiLinkedin size={"30px"} /></ButtonMidia>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{scale: 1.1, y: -5}}
                    whileTap={{scale: 0.95}}
                    transition={{type: "spring", stiffness: 300}}
                  >
                    <ButtonMidia clickAction={handleGitHub}><VscGithubInverted size={"30px"} /></ButtonMidia>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{scale: 1.1, y: -5}}
                    whileTap={{scale: 0.95}}
                    transition={{type: "spring", stiffness: 300}}
                  >
                    <ButtonMidia clickAction={handleEmail}><LuMail size={"30px"} /></ButtonMidia>
                  </motion.div>
              </motion.div>
                   
          </motion.div>
         
          <motion.span 
          initial={{scale: 0, opacity: 0, y: 50}}
          animate={{ opacity: 1, scale: 1, y: 0}}
           transition={{
             duration: 0.8,
             delay: 2.2,
             ease: [0.25, 0.46, 0.45, 0.94],
             type: "spring",
             stiffness: 100
           }}
          className="bottom-0 absolute lg:bottom-4 z-20">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <BsChevronDoubleDown size={"30px"} className="text-blue-600 dark:text-yellow-400" />
              </motion.div>
          </motion.span>   
      </section>
  );
}
