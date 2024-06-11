type Props = {
    label: string;
    _onClick: ()=>void;
}


export const ButtonLink = ({label, _onClick}: Props) =>{
    return(
     <div className="flex flex-col text-sm  sm:mx-1 md:mx-2 md:min-w-[80px] md:text-sm lg:text-base">
          <button className="h-8 my-auto
                hover:border-b-[2px]  border-black dark:border-white  transition duration-500 ease-in-out font-semibold " type="button" onClick={_onClick}>{label}
          </button>
     </div>
    )
}