import { projectType } from "@/types/projectType";
import imgColeman from "@/assets/images/RonieColeman.png";
import imgPomodoro from "@/assets/images/pomodoro.png";
import imgSibi from "@/assets/images/sibi.png";
import imgJogosLogisticos from "@/assets/images/jogoslogisticos.png";
import imgEstagio from "@/assets/images/estagio.png";
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
        imageProject: imgJogosLogisticos,
        title: "Jogos Logísticos IFBA",
        description: "Jogos logísticos interativos desenvolvidos para o IFBA com React, TypeScript e Django.",
        linkGithub: "",
        usedtechnologies: ["React", "TypeScript", "Django", "PostgreSQL", "Scrum", "Git", "Figma"],
        urlProject: "https://ifba-jogos-juazeiro-front-production.up.railway.app/"
    },
    {
        id: 5,
        imageProject: imgEstagio,
        title: "Sistema de Gestão de Estágios",
        description: "Plataforma de gestão de estágios da UNIVASF desenvolvida em PHP/Laravel com PostgreSQL.",
        linkGithub: "",
        usedtechnologies: ["PHP", "Laravel", "PostgreSQL", "Docker", "Git", "Cursor", "Claude Code", "MCPs", "Gemini-cli", "Gemini", "Task Master", "Codex-cli"],
        urlProject: ""
    },
    {
        id: 6,
        imageProject: imgSibi,
        title: "SIBI na Palma da Mão",
        description: "App guia do SIBI (UNIVASF) feito em Flutter.",
        linkGithub: "https://github.com/aureliodeboa/AplicativoSIBI?tab=readme-ov-file",
        usedtechnologies: ["Flutter", "Dart", "Scrum", "Git"],
        urlProject: "https://www.youtube.com/watch?v=p7WKsB0vFxk&feature=youtu.be"
    },
    {
        id: 7,
        imageProject: imgColeman,
        title: "Tribute Ronnie Coleman",
        description: "Página tributo responsiva ao fisiculturista Ronnie Coleman.",
        linkGithub: "https://github.com/aureliodeboa/Tribute-Ronnie-Coleman",
        usedtechnologies: ["Html", "Css", "Git"],
        urlProject: "https://aureliodeboa.github.io/Tribute-Ronnie-Coleman/"
    }
];
