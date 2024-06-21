import { SiLinkedin } from "react-icons/si"
import { ButtonMidia } from "../ButtonMidia"
import { LuMail } from "react-icons/lu"
import { SendEmail } from "../SendEmail"
import { FaWhatsapp } from "react-icons/fa";


export const Contact = () =>{
    return(
        <section className="h-screen w-full flex items-center justify-center">
                <div className="h-dvh w-[98%] flex flex-col md:flex-row border-black dark:border-white  rounded-3xl border-[2px]  p-6">
                    <div className="flex flex-col h-auto  md:w-1/2  text-justify py-4  gap-4">
                        <h1 className=" text-2xl md:text-3xl font-bold ">Contato</h1>
                        <p className=" text-sm md:text-base w-full text-justify md:w-2/3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, tempore! Ad eius porro nesciunt molestiae? Doloribus maxime accusamus</p>
                        <div className="flex flex-row ">
                            <ButtonMidia clickAction={()=>{}}><SiLinkedin size={"30px"} /></ButtonMidia>
                            {/*<ButtonMidia clickAction={()=>{}}><FaWhatsapp  size={"30px"} /></ButtonMidia>*/}
                            <ButtonMidia clickAction={()=>{}}><LuMail size={"30px"} /></ButtonMidia>
                        </div>
                        
                    </div>
                    <SendEmail/>
                </div>
        </section>
    )
}