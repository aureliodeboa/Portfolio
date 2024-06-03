import { ButtonTheme } from "./ButtonTheme"
import { Switchlanguage } from "./Switchlanguage"


export const Navbar =()=> {
    return(
        <nav className="h-14 flex flex-row justify-between  border border-dashed  text-center">
            <div className="basis-1/2 p-2">Aurelio Ribeiro</div> 
            <div className="justify-center p-2">Inicio</div>
         
            <Switchlanguage/>
            
            <ButtonTheme/>

            
        </nav>
    )
}