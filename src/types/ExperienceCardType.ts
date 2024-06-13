import { StaticImageData } from "next/image";

export type ExperienceCardType = {
    //comapany descriptions
    logoCompany?: StaticImageData;
    titleCompany :string;
    subtitleCompany?: string;
    
    //jobs descritions
    titleJob: string;
    descriptionJob: string[];
    usedtechnologies :string[];
    dateIn:Date;
    dateOut?: Date | string;

}
