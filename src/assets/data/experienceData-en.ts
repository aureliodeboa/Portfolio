import { ExperienceCardType } from "@/types/ExperienceCardType";
import i9logo from "@/assets/images/logo_i9.png";
import ebserhlogo from "@/assets/images/ebserh_Logo.png";
import facepelogo from "@/assets/images/facepe_logo.png";

// Experience data, important detail: months start at 0
export const experienceData_en: ExperienceCardType[] = [
  {
    id: 1,
    logoCompany: i9logo,
    titleCompany: "Inove Jr",
    subtitleCompany: "Technology Solutions",
    titleJob: "Operational Management",
    descriptionJob: [
      "Financial management of the company",
      "Taught C minicourses",
      "Assisted in the development of the company's website in React",
      "Development of web and mobile projects within the company"
    ],
    usedtechnologies: ["React", "Git", "Scrum", "Html", "Flutter", "Javascript", "Typescript", "Figma"],
    dateIn: new Date(2024, 2, 2),
    dateOut: new Date(Date.now()),
  },
  {
    id: 2,
    logoCompany: facepelogo,
    titleCompany: "FACEPE",
    subtitleCompany: "Foundation for Support to Science and Technology of PE",
    titleJob: "Scholar - PET (Technological Extension Project)",
    descriptionJob: [
      "Support for the Implementation of Business Intelligence Resources in Commerce and Services",
      "Construction of Dashboards using Power BI",
      "Construction of DataWare House",
      "ETL (Extraction, Transformation, and Loading of data)",
      "Development of scripts in Python for data cleaning",
      "Regex"
    ],
    usedtechnologies: ["Power BI", "Git", "Scrum", "Python", "Figma"],
    dateIn: new Date(2024, 2, 2),
    dateOut: new Date(Date.now()),
  },
  {
    id: 3,
    logoCompany: ebserhlogo,
    titleCompany: "EBSERH",
    subtitleCompany: "Brazilian Hospital Services Company",
    titleJob: "Scholar - PIT (Technological Initiation Project)",
    descriptionJob: [
      "Development of the Application for Antimicrobial Therapeutic Guide",
      "Requirement gathering for the application, identifying essential needs and functionalities",
      "Research and analysis of similar applications in the market to identify opportunities for improvement",
      "Development of user interfaces and programming"
    ],
    usedtechnologies: ["Flutter", "Git", "Scrum", "Dart", "Figma"],
    dateIn: new Date(2023, 2),
    dateOut: new Date(2023, 7),
  },
  {
    id: 4,
    logoCompany: facepelogo,
    titleCompany: "FACEPE",
    subtitleCompany: "Foundation for Support to Science and Technology of PE",
    titleJob: "Scholar - PET (Technological Extension Project)",
    descriptionJob: [
      "Development of an Application to assist elderly people with dementia and their caregivers",
      "Actively participated in the construction of each screen of the application",
      "Directly responsible for implementing the audio player",
      "Application aimed at assisting elderly people with dementia and their caregivers, promoting family closeness and remote medical support",
      "Development in Flutter",
      "Management of a multidisciplinary team",
      "Using Git for code versioning"
    ],
    usedtechnologies: ["Flutter", "Git", "Scrum", "Dart", "Figma"],
    dateIn: new Date(2022, 11),
    dateOut: new Date(2023, 4)
  }
];
