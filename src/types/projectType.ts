
import { StaticImageData } from "next/image";

export type projectType = { 
    imageProject?: StaticImageData;
    id: number;
    title: string;
    description: string;
    linkGithub: string;
    urlProject?: string;

    usedtechnologies :string[];

}