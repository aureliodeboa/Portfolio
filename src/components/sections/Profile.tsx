import { VscGithubInverted,VscGithubAlt } from "react-icons/vsc";
import { SiLinkedin,SiSpotify } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { ButtonMidia } from "../ButtonMidia";
import { GoDownload } from "react-icons/go";
import { BsDownload } from "react-icons/bs";


export const Profile = () =>{
    return(
        <section className="flex flex-col justify-center  xl:flex-row  gap-6  lg:flex-row w-full px-5 content-center items-center">
            <span className="flex justify-center xl:ml-2  lg:ml-8"><img className="rounded-[80%] lg:rounded-[50px] h-[250px] w-[250px] md:mt-5 lg:mt-0 md:h-[300px] md:w-[300px] " src="/assets/images/profile.jpg" alt='imagem aurelio' /></span>

            <div className="flex-1 flex-col  justify-center text-center xl:text-start lg:text-start">
                <span className="w-full text-wrap flex flex-col justify-center">
                    <h1 className="font-bold text-2xl md:text-2xl lg:text-4xl">Olá, eu sou Aurelio Ribeiro!</h1>
                    <p className="mt-2 pr-4 text-sm md:text-lg w-5/4 text-center lg:text-start">Graduando em Engenharia  da computação, Desenvolvedor Front-End, Mobile e entusiasta na análise de dados.</p>
                </span>

                <div className="flex flex-row justify-center lg:justify-start  items-center mr-1 h-20 w-full">
                    <ButtonMidia clickAction={()=>{}}><span className="h-[30px] sm:flex flex-row justify-around hidden p-1 mr-1">Curriculo</span><span className="mt-[2px] sm:size-[25px] flex justify-center items-center"><BsDownload size={"27px"} /></span></ButtonMidia>
                    <ButtonMidia clickAction={()=>{}}><SiLinkedin size={"30px"} /></ButtonMidia>
                    <ButtonMidia clickAction={()=>{}}><VscGithubInverted size={"30px"} /></ButtonMidia>
                    <ButtonMidia clickAction={()=>{}}><LuMail size={"30px"} /></ButtonMidia>
                    <ButtonMidia clickAction={()=>{}}><SiSpotify size={"30px"} /></ButtonMidia>
                    
                    
                 </div>
            </div>
        </section>
    )
}