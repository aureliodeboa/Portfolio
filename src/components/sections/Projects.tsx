import { ProjectCard } from "../ProjectCard";

export const Projects = () => {
  return (
    <div className="h-auto p-8 flex flex-col items-center w-full">
      <div className="h-dvh w-full">
        <h1 className="text-4xl px-10 font-bold text-left">Projetos</h1>
        <h6 className="pt-5 px-10 text-base text-left">
          Esses são alguns dos meus projetos pessoais que estão disponíveis no GitHub.
        </h6>
        <div className="flex justify-center items-center w-full mt-6">
          <div className="w-full max-w-4xl items-center flex justify-center px-20">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};
