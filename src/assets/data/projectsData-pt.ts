import { projectType } from "@/types/projectType";
import imgColeman from "@/assets/images/RonieColeman.png";
import imgPomodoro from "@/assets/images/pomodoro.png";
import imgSibi from "@/assets/images/sibi.png";
import imgStarbuks from "@/assets/images/starbuks.png";
import imgTodoReact from "@/assets/images/todoreact.png";
import imgQuizReact from "@/assets/images/QuizReact.png";
import imgI9site from "@/assets/images/sitei9.png";
import micael from "@/assets/images/micael_portfolio.png";

export const projectData_pt: projectType[] = [
    {
        id: 1,
        imageProject: micael,
        title: "Micael Contador",
        description: "Site profissional para contador, focado em serviços e captação de clientes.",
        linkGithub: "https://github.com/aureliodeboa/micael-portfolio",
        usedtechnologies: ["Typescript", "Tailwind", "React", "Next.js", "Git", "Kanban", "Framer Motion"],
        urlProject: "https://micaelcontador.netlify.app/"
    },
    {
        id: 2,
        imageProject: imgI9site,
        title: "Site I9 Junior",
        description: "Site institucional da I9 Jr; atuei no front-end.",
        linkGithub: "https://github.com/inove-jr/i9-website",
        usedtechnologies: ["Typescript", "Tailwind", "React", "Next.js", "Git", "Kanban", "Scrum"],
        urlProject: "https://inove-jr.vercel.app/"
    },
    {
        id: 3,
        imageProject: imgPomodoro,
        title: "Pomodoro Timer",
        description: "Timer Pomodoro personalizável com temas e tempos configuráveis.",
        linkGithub: "https://github.com/aureliodeboa/Pomodoro",
        usedtechnologies: ["Html", "Css", "Javascript", "Git"],
        urlProject: "https://silver-chebakia-3fd8cb.netlify.app/"
    },
    {
        id: 4,
        imageProject: imgStarbuks,
        title: "Starbucks",
        description: "Réplica simples da homepage Starbucks usando apenas HTML e CSS.",
        linkGithub: "https://github.com/aureliodeboa/Starbucks?tab=readme-ov-file",
        usedtechnologies: ["Html", "Css", "Git"],
        urlProject: "https://inquisitive-cendol-2fd1cd.netlify.app/"
    },
    {
        id: 5,
        imageProject: imgTodoReact,
        title: "To-do-with-Reducers",
        description: "Lista de tarefas com Context API e Reducers em Next.js.",
        linkGithub: "https://github.com/aureliodeboa/To-do-with-Reducers",
        usedtechnologies: ["Typescript", "Tailwind", "React", "Next.js", "Reducers", "Contexts", "Git"]
    },
    {
        id: 6,
        imageProject: imgQuizReact,
        title: "Quiz App",
        description: "Quiz em React/Next.js com feedback de acertos e erros.",
        linkGithub: "https://github.com/aureliodeboa/Quiz-app?tab=readme-ov-file",
        usedtechnologies: ["Typescript", "Tailwind", "React", "Next.js", "Html", "Git"],
        urlProject: "https://fastidious-kangaroo-7e1acc.netlify.app/"
    },
    {
        id: 7,
        imageProject: imgSibi,
        title: "SIBI na Palma da Mão",
        description: "App guia do SIBI (UNIVASF) feito em Flutter.",
        linkGithub: "https://github.com/aureliodeboa/AplicativoSIBI?tab=readme-ov-file",
        usedtechnologies: ["Flutter", "Dart", "Scrum", "Git"],
        urlProject: "https://www.youtube.com/watch?v=p7WKsB0vFxk&feature=youtu.be"
    },
    {
        id: 8,
        imageProject: imgColeman,
        title: "Tribute Ronnie Coleman",
        description: "Página tributo responsiva ao fisiculturista Ronnie Coleman.",
        linkGithub: "https://github.com/aureliodeboa/Tribute-Ronnie-Coleman",
        usedtechnologies: ["Html", "Css", "Git"],
        urlProject: "https://aureliodeboa.github.io/Tribute-Ronnie-Coleman/"
    }
];
