type Props = {
    label: string;
    _onClick: ()=>void;
}


export const Buttonavbar = ({label, _onClick}: Props) =>{
    return(
     <div className="flex flex-col">
          <button className="mx-2 h-8 my-auto
         hover:border-b-[2px]  border-black dark:border-white  transition duration-500 ease-in-out font-semibold " type="button" onClick={_onClick}>{label}</button>
         
     </div>
    )
}