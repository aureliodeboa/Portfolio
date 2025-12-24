import { ExperienceCardType } from "@/types/ExperienceCardType";
import i9logo from "@/assets/images/logo_i9.png"
import ebserhlogo from "@/assets/images/ebserh_Logo.png"
import facepelogo from "@/assets/images/facepe_logo.png"
import brisanetlogo from "@/assets/images/brisanet_logo.png"
import cepedilogo from "@/assets/images/cepedi.png"
import univasflogo from "@/assets/images/univasf_logo.png"

//dados das exeperinecias, detalhe importante é que os meses começam no 0 
export const experienceData_pt: ExperienceCardType[]= [
{
    id:1,
    logoCompany: univasflogo,
    titleCompany: "UNIVASF",
    subtitleCompany:"Universidade Federal do Vale do São Francisco",

    titleJob: "Desenvolvedor Full Stack (PHP/Laravel)",
    descriptionJob: [
        "Desenvolvimento e manutenção da plataforma de gestão de estágios da universidade",
        "Implementação de Dashboard de Indicadores (KPIs) para monitoramento de contratos ativos, convênios e perfil das empresas",
        "Criação de sistema de validação de pendências, reduzindo o tempo de atendimento aos discentes de dias para segundos",
        "Desenvolvimento de módulo de relatórios gerenciais com filtros dinâmicos e exportação para Excel/PDF",
        "Automatização da emissão de documentos e declarações, reduzindo processos de horas para segundos com um clique",
        "Prototipação de nova plataforma de estágios utilizando React e Supabase com IA e MCPs",
        "Correção de bugs e otimização de queries em PostgreSQL",
        "Utilização de Docker para padronização de ambientes e Git para versionamento"
    ],
    usedtechnologies: ["PHP","Laravel","PostgreSQL","Docker","Git","React","Supabase","Cursor","Claude Code","MCPs","Gemini-cli","Gemini","Task Master","Codex-cli"],
    dateIn: new Date(2025,2),
    dateOut:  new Date(Date.now()),
},
{
    id:2,
    logoCompany: brisanetlogo,
    titleCompany: "Brisanet",
    subtitleCompany:"Telecomunicações",

    titleJob: "Desenvolvedor Full Stack",
    descriptionJob: ["Implementação de uma ferramenta interna baseada em Backstage.io para gestão e integração de serviços","Colaboração em projetos full stack, utilizando PHP, React e Node.js","Uso de Git, GitHub e Git Flow para versionamento e fluxo de desenvolvimento","Padronização de ambientes de desenvolvimento com Docker"],
    usedtechnologies: ["Backstage.io","PHP","React","Node.js","Git","GitHub","Git Flow","Docker"],
    dateIn: new Date(2025,5),
    dateOut:  new Date(2025,8),
},
{
    id:3,
    logoCompany: cepedilogo,
    titleCompany: "CEPEDI",
    subtitleCompany:"Centro de Pesquisa e Desenvolvimento",

    titleJob: "Residente – Desenvolvedor Full Stack",
    descriptionJob: [
        "Contribuí no desenvolvimento de jogos logísticos interativos para o IFBA, tornando o aprendizado mais dinâmico e prático",
        "Atuei como Scrum Master, organizando sprints, elaborando tasks, distribuindo atividades e garantindo o cumprimento dos prazos",
        "Implementei novas funcionalidades e realizei manutenção da aplicação, incluindo elaboração de mapas offline sem depender da API do Google",
        "Desenvolvi com React.js, TypeScript e Tailwind CSS no front-end, e Django com PostgreSQL no back-end",
        "Utilizei Docker para padronização dos ambientes e Git com Git Flow para versionamento",
        "Configurei o CI/CD do projeto com deploy na Railway",
        "Participei de práticas ágeis e colaboração em equipe"
    ],
    usedtechnologies: ["React","TypeScript","Tailwind","Django","PostgreSQL","Docker","Git","Git Flow","Railway","Scrum","Figma"],
    dateIn: new Date(2024,1),
    dateOut:  new Date(Date.now()),
},
{
    id:4,
    logoCompany: i9logo,
    titleCompany: "Inove Jr",
    subtitleCompany:"Soluções em Tecnologia",

    titleJob: "Gestão Operacional",
    descriptionJob: ["Gestão Financeira da empresa"," Ministrei minicursos de C","Ajudei no desenvolvimento do site da empresa em React","Desenvolvimento de projetos web e mobile na empresa"],
    usedtechnologies: ["React","Git","Scrum","Html","Flutter","Javascript","Typescript","Figma"],
    dateIn: new Date(2024,2,2),
    dateOut:  new Date(2025,2),
},
{
    id:5,
    logoCompany: facepelogo,
    titleCompany: "FACEPE ",
    subtitleCompany:"Fundação de Amparo a Ciência e Tecnologia de PE",
    titleJob: "Bolsista - PET (Projeto de Extensão Tecnológica)",
    descriptionJob: ["Apoio a Implantação de Recursos de Business Intelligence em Comércio e Serviços","Construção de Dashboards usando Power BI","Construção DataWare House","ETL (Extração Transformação e Limpeza dos dados)","Construção de scripts em Python para limpeza dos dados ","Regex"],
    usedtechnologies: ["Power BI","Git","Scrum","Python","Figma"],
    dateIn: new Date(2024,2,2),
    dateOut: new Date(2024,5),
},
{   
    id:6,
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
    id:7,
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

