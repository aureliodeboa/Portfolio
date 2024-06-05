import { Buttonavbar } from "./Buttonavbar"
import { ButtonTheme } from "./ButtonTheme"
import { Switchlanguage } from "./Switchlanguage"


export const Navbar =()=> {
    return(
        <nav className="h-14 flex flex-row justify-between  border-b-[0.5px] border-gray-500  text-center">
            <div className="basis-1/4 p-1 text-xl font-bold m-2"> {"<"}<span className="text-yellow-300">/</span>{"> "}Aurelio Ribeiro</div> 
            <Buttonavbar label="Inicio" _onClick={()=>{}} />
            <Buttonavbar label="Sobre mim" _onClick={()=>{}} />
            <Buttonavbar label="Experiencia" _onClick={()=>{}} />
            <Buttonavbar label="Projetos" _onClick={()=>{}} />
            <Buttonavbar label="Contato" _onClick={()=>{}} />
            <Switchlanguage/>
            <ButtonTheme/>

            
        </nav>
    )
}