
export const Profile = () =>{
    return(
        <section className="flex flex-col justify-center  xl:flex-row  gap-6  lg:flex-row">
            <span className="flex justify-center xl:ml-2  lg:ml-8"><img className="rounded-[80%] lg:rounded-[50px] h-[250px] w-[250px] md:mt-5 lg:mt-0 md:h-[300px] md:w-[300px] " src="/assets/images/profile.jpg" alt='imagem aurelio' /></span>

            <div className="flex-1 flex-col  justify-center text-center xl:text-start lg:text-start">
                <span className="w-full text-wrap flex flex-col justify-center">
                    <h1 className="font-bold text-2xl md:text-2xl lg:text-4xl">Olá, eu sou Aurelio Ribeiro!</h1>
                    <p className="mt-2 pr-4 text-sm md:text-lg w-5/4">Graduando em Engenharia  da computação, Desenvolvedor Front-End, Mobile e entusiasta na análise de dados.</p>
                </span>
                <div className="h-20 w-full bg-red-500">
                <span>C O N T A T O S   </span>
                </div>
            </div>
        </section>
    )
}