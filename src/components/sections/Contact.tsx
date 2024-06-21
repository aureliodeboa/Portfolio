import { SiLinkedin } from "react-icons/si"
import { ButtonMidia } from "../ButtonMidia"
import { LuMail } from "react-icons/lu"
import { SendEmail } from "../SendEmail"
import { FaWhatsapp } from "react-icons/fa";


export const Contact = () =>{
    return(
        <section className="h-screen w-full flex items-center justify-center">
                <div className="h-auto w-[98%] flex flex-row border-black dark:border-white rounded-3xl border-[2px] p-6">
                    <div className="flex flex-col h-1/4  w-1/2 justify-between text-justify py-4 gap-4">
                        <h1 className="text-3xl font-bold ">Contato</h1>
                        <p className="text-justify w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, tempore! Ad eius porro nesciunt molestiae? Doloribus maxime accusamus</p>
                        <div className="flex flex-row">
                            <ButtonMidia clickAction={()=>{}}><SiLinkedin size={"30px"} /></ButtonMidia>
                            <ButtonMidia clickAction={()=>{}}><FaWhatsapp  size={"30px"} /></ButtonMidia>
                            <ButtonMidia clickAction={()=>{}}><LuMail size={"30px"} /></ButtonMidia>
                        </div>
                        
                    </div>
                    <SendEmail/>
                </div>
        </section>
    )
}