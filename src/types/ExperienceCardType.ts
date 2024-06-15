import { StaticImageData } from "next/image";

export type ExperienceCardType = {
    //comapany descriptions
    id: number;
    logoCompany?: StaticImageData;
    titleCompany :string;
    subtitleCompany?: string;
    
    //jobs descritions
    titleJob: string;
    descriptionJob: string[];
    usedtechnologies :string[];
    dateIn:Date;
    dateOut: Date; //caso hoje, então será atualamente

}
