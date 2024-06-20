import { SiLinkedin } from "react-icons/si"
import { ButtonMidia } from "../ButtonMidia"
import { LuMail } from "react-icons/lu"
import { SendEmail } from "../SendEmail"

export const Contact = () =>{
    return(
        <section className="h-screen">
                <div className="h-dvh w-full">
                    <div>
                        <h1>Contao</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, tempore! Ad eius porro nesciunt molestiae? Doloribus maxime accusamus</p>
                        <ButtonMidia clickAction={()=>{}}><SiLinkedin size={"30px"} /></ButtonMidia>
                        <ButtonMidia clickAction={()=>{}}>ZAP</ButtonMidia>
                        <ButtonMidia clickAction={()=>{}}><LuMail size={"30px"} /></ButtonMidia>
                        <SendEmail/>
                    </div>
                    for
                </div>
        </section>
    )
}