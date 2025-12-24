import { projectType } from "@/types/projectType";
import imgColeman from "@/assets/images/RonieColeman.png";
import imgPomodoro from "@/assets/images/pomodoro.png";
import imgSibi from "@/assets/images/sibi.png";
import imgJogosLogisticos from "@/assets/images/jogoslogisticos.png";
import imgEstagio from "@/assets/images/estagio.png";
import imgI9site from "@/assets/images/sitei9.png";
import micael from "@/assets/images/micael_portfolio.png";

export const projectData_en: projectType[] = [
    {
        id: 1,
        imageProject: micael,
        title: "Micael Contador",
        description: "Professional website for an accountant, focused on services and lead capture.",
        linkGithub: "https://github.com/aureliodeboa/micael-portfolio",
        usedtechnologies: ["TypeScript", "Tailwind", "React", "Next.js", "Git", "Kanban", "Framer Motion"],
        urlProject: "https://micaelcontador.netlify.app/"
    },
    {
        id: 2,
        imageProject: imgI9site,
        title: "I9 Junior Website",
        description: "Institutional website for I9 Jr; I developed the front-end.",
        linkGithub: "https://github.com/inove-jr/i9-website",
        usedtechnologies: ["TypeScript", "Tailwind", "React", "Next.js", "Git", "Kanban", "Scrum"],
        urlProject: "https://inove-jr.vercel.app/"
    },
    {
        id: 3,
        imageProject: imgPomodoro,
        title: "Pomodoro Timer",
        description: "Customizable Pomodoro timer with themes and adjustable times.",
        linkGithub: "https://github.com/aureliodeboa/Pomodoro",
        usedtechnologies: ["Html", "Css", "Javascript", "Git"],
        urlProject: "https://silver-chebakia-3fd8cb.netlify.app/"
    },
    {
        id: 4,
        imageProject: imgJogosLogisticos,
        title: "IFBA Logistics Games",
        description: "Interactive logistics games developed for IFBA using React, TypeScript and Django.",
        linkGithub: "",
        usedtechnologies: ["React", "TypeScript", "Django", "PostgreSQL", "Scrum", "Git", "Figma"],
        urlProject: "https://ifba-jogos-juazeiro-front-production.up.railway.app/"
    },
    {
        id: 5,
        imageProject: imgEstagio,
        title: "Internship Management System",
        description: "UNIVASF's internship management platform developed in PHP/Laravel with PostgreSQL.",
        linkGithub: "",
        usedtechnologies: ["PHP", "Laravel", "PostgreSQL", "Docker", "Git", "Cursor", "Claude Code", "MCPs", "Gemini-cli", "Gemini", "Task Master", "Codex-cli"],
        urlProject: ""
    },
    {
        id: 6,
        imageProject: imgSibi,
        title: "SIBI in the Palm of Your Hand",
        description: "Guide app for UNIVASF's SIBI built with Flutter.",
        linkGithub: "https://github.com/aureliodeboa/AplicativoSIBI?tab=readme-ov-file",
        usedtechnologies: ["Flutter", "Dart", "Scrum", "Git"],
        urlProject: "https://www.youtube.com/watch?v=p7WKsB0vFxk&feature=youtu.be"
    },
    {
        id: 7,
        imageProject: imgColeman,
        title: "Tribute to Ronnie Coleman",
        description: "Responsive tribute page to bodybuilder Ronnie Coleman.",
        linkGithub: "https://github.com/aureliodeboa/Tribute-Ronnie-Coleman",
        usedtechnologies: ["Html", "Css", "Git"],
        urlProject: "https://aureliodeboa.github.io/Tribute-Ronnie-Coleman/"
    }
];
