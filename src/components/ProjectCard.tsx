import { ToolsComponent } from "./ToolsComponent"
import coleman from"@/assets/images/RonieColeman.png"

export const ProjectCard = () =>{
    return(
        <div className="h-auto w-[450px] flex  items-center flex-col  border-b-2  border-[#fff]  text-black dark:text-white bg-[#EEEE] dark:bg-[#151414]    gap-3 rounded-lg">
           <span><img className="p-6 rounded-lg  " src={coleman.src} alt="Imagem do Ronie Coleman" /></span>
           <a href="https://github.com/aureliodeboa/Tribute-Ronnie-Coleman?tab=readme-ov-file" rel="noopener" target="_blank">
                <h1 className="text-3xl font-bold hover:text-[#AAA]">Tribute  Ronnie Coleman</h1>
            </a>
           <p className="px-6 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis corporis officia quas ipsam possimus unde deserunt omnis fuga aliquid, ipsum tempora id blanditiis ad minima voluptates assumenda illo, earum qui.</p>
           <div className="p-3 flex flex-row gap-2 flex-wrap w-full items-center justify-center">
                <ToolsComponent label={"HTML"}/>
                <ToolsComponent label={"CSS"}/>
                <ToolsComponent label={"Git"}/>
              
           </div>
        </div>
    )
}