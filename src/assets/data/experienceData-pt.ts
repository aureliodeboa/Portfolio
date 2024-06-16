import { ExperienceCardType } from "@/types/ExperienceCardType";
import i9logo from "@/assets/images/logo_i9.png"
import ebserhlogo from "@/assets/images/ebserh_Logo.png"
import facepelogo from "@/assets/images/facepe_logo.png"
//dados das exeperinecias, detalhe importante é que os meses começam no 0 
export const experienceData_pt: ExperienceCardType[]= [
{
    id:1,
    logoCompany: i9logo,
    titleCompany: "Inove Jr",
    subtitleCompany:"Soluções em Tecnologia",

    titleJob: "Gestão Operacional",
    descriptionJob: ["Gestão Financeira da empresa"," Ministrei minicursos de C","Ajudei no desenvolvimento do site da empresa em React","Desenvolvimento de projetos web e mobile na empresa"],
    usedtechnologies: ["React","Git","Scrum","Html","Flutter","Javascript","Typescript","Figma"],
    dateIn: new Date(2024,2,2),
    dateOut:  new Date(Date.now()),
},
{
    id:2,
    logoCompany: facepelogo,
    titleCompany: "FACEPE ",
    subtitleCompany:"Fundação de Amparo a Ciência e Tecnologia de PE",
    titleJob: "Bolsista - PET (Projeto de Extensão Tecnológica)",
    descriptionJob: ["Apoio a Implantação de Recursos de Business Intelligence em Comércio e Serviços","Construção de Dashboards usando Power BI","Construção DataWare House","ETL (Extração Transformação e Limpeza dos dados)","Construção de scripts em Python para limpeza dos dados ","Regex"],
    usedtechnologies: ["Power BI","Git","Scrum","Python","Figma"],
    dateIn: new Date(2024,2,2),
    dateOut: new Date(Date.now()),
},
{   
    id:3,
    logoCompany: ebserhlogo,
    titleCompany: "EBSERH",
    subtitleCompany:"Empresa Brasileira de Serviços Hospitalares",

    titleJob: "Bolsista - PIT (Projeto de Iniciação Tecnológica)",
    descriptionJob: ["Desenvolvimento do Aplicativo para Guia Terapêutico Antimicrobiano","Levantamento de requisitos do aplicativo, identificando necessidades e funcionalidades essenciais.","Pesquisa e análise de aplicativos semelhantes no mercado para identificar oportunidades de melhoria","Desenvolvimento de interfaces de usuário e programação "],
    usedtechnologies: ["Flutter","Git","Scrum","Dart","Figma"],
    dateIn: new Date(2023,2),
    dateOut: new Date(2023,7),
},
{
    id:4,
    logoCompany: facepelogo,
    titleCompany: "FACEPE ",
    subtitleCompany:"Fundação de Amparo a Ciência e Tecnologia de PE",
    
    titleJob: "Bolsista - PET (Projeto de Extensão Tecnológica)",
    descriptionJob: ["Desenvolvimento de um Aplicativo para auxiliar idosos com demência e seus cuidadores","Participai ativamente da contrução de cada tela do aplicatico","Responsável direto pela implementação do reprodutor de áudio","Aplicativo com propósito de  auxiliar idosos com demência e seus cuidadores, promovendo aproximação familiar e suporte médico à distância","Desenvolvimento em Flutter","Gerenciamento de uma equipe multidisciplinar","Utilização do Git para versionamento do codigo"],
    usedtechnologies: ["Flutter","Git","Scrum","Dart","Figma"],
    dateIn: new Date(2022,11),
    dateOut: new Date(2023,4)
}

]

