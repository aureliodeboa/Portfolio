import { ExperienceCardType } from "@/types/ExperienceCardType";
import i9logo from "@/assets/images/logo_i9.png"
import ebserhlogo from "@/assets/images/ebserh_Logo.png"
import facepelogo from "@/assets/images/facepe_logo.png"

export const experienceData: ExperienceCardType[]= [
{
    id:1,
    logoCompany: i9logo,
    titleCompany: "Inove Jr",
    subtitleCompany:"Soluções em Tecnologia",

    titleJob: "Membro- Gestão Operacional",
    descriptionJob: ["Gestão Financeira da empresa"," Ministrei minicursos de C","Ajudei no desenvolvimento do site da empresa em React","Desenvolvimento de projetos web e mobile na empresa"],
    usedtechnologies: ["React","Git","Scrum","Html","Flutter","Javascript","Typescript","Figma"],
    dateIn: new Date(2024,3,2),
    dateOut: "Atualmente",
},
{
    id:2,
    logoCompany: facepelogo,
    titleCompany: "FACEPE - Bolsista",
    subtitleCompany:"Apoio a Implantação de Recursos de Business Intelligence em Comércio e Serviços",

    titleJob: "Bolsista - Apoio de Recursos de BI em Comércio e Serviços",
    descriptionJob: ["Construção de Dashboards usando Power BI","Construção DataWare House","ETL (Extração Transformação e Limpeza dos dados)","Construção de scripts em Python para limpeza dos dados ","Regex"],
    usedtechnologies: ["Power BI","Git","Scrum","Python","Figma"],
    dateIn: new Date(2024,3,2),
    dateOut: "Atualmente",
},
{   
    id:3,
    logoCompany: ebserhlogo,
    titleCompany: "Bolsista PIT (Programa de Iniciação Tecnológica)",
    subtitleCompany:"Desenvolvimento do Aplicativo para Guia Terapêutico Antimicrobiano",

    titleJob: "Desenvolvedor Mobile (Flutter) ",
    descriptionJob: ["Levantamento de requisitos do aplicativo, identificando necessidades e funcionalidades essenciais.","Pesquisa e análise de aplicativos semelhantes no mercado para identificar oportunidades de melhoria","Desenvolvimento de interfaces de usuário e programação "],
    usedtechnologies: ["Flutter","Git","Scrum","Dart","Figma"],
    dateIn: new Date(2023,3),
    dateOut: new Date(2023,8),
},
{
    id:4,
    logoCompany: facepelogo,
    titleCompany: "FACEPE - Bolsista",
    subtitleCompany:"Desenvolvimento de um Aplicativo para auxiliar idosos com demência e seus cuidadores",

    titleJob: "Bolsista - Apoio de Recursos de BI em Comércio e Serviços",
    descriptionJob: ["Participai ativamente da contrução de cada tela do aplicatico","Responsável direto pela implementação do reprodutor de áudio","Aplicativo com propósito de  auxiliar idosos com demência e seus cuidadores, promovendo aproximação familiar e suporte médico à distância","Desenvolvimento em Flutter","Gerenciamento de uma equipe multidisciplinar","Utilização do Git para versionamento do codigo"],
    usedtechnologies: ["Flutter","Git","Scrum","Dart","Figma"],
    dateIn: new Date(2022,12),
    dateOut: new Date(2023,4)
}

]

