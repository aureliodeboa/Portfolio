import { AboutMeItemType } from "@/types/AboutMeItemType";
import jiuImg from "@/assets/images/about_me/jiu.jpg";
import academiaImg from "@/assets/images/about_me/academia.JPG";
import cafeImg from "@/assets/images/about_me/cafe.JPG";
import viagemImg from "@/assets/images/about_me/viagem.jpg";
import tccImg from "@/assets/images/about_me/tcc.JPG";
import bebeImg from "@/assets/images/about_me/bebe.png";
import bicicletaImg from "@/assets/images/about_me/bicicleta.JPG";
import aviaoImg from "@/assets/images/about_me/aviao.jpg";
import lerImg from "@/assets/images/about_me/ler.JPG";
import ensinarImg from "@/assets/images/about_me/ensinar.JPG";
import programarImg from "@/assets/images/about_me/programar.JPG";
import motoImg from "@/assets/images/about_me/moto.JPG";
import lolImg from "@/assets/images/about_me/lol.png";

const toSrc = (img: string | { src: string }) => typeof img === "string" ? img : img.src;

export const aboutmeData_en: AboutMeItemType[] = [
    {
        image: toSrc(cafeImg),
        link: '',
        title: 'Coffee',
        description: 'Coffee is part of my rhythm: it follows the start of the day, the pauses, and the good ideas that appear along the way.'
    },
    {
        image: toSrc(academiaImg),
        link: '',
        title: 'Gym',
        description: 'I have been training since 2016. It is a habit that strengthens my body, my discipline, and my consistency.'
    },
    {
        image: toSrc(jiuImg),
        link: '',
        title: 'Jiu-Jitsu',
        description: 'In Jiu-Jitsu I find focus, humility, and self-control. It is where I train body and mind to improve a little every day.'
    },
    {
        image: toSrc(motoImg),
        link: '',
        title: '"Motorcycle"',
        description: 'Motorcycles mean freedom, presence, and the open road. I enjoy the feeling of discovering new paths on two wheels.'
    },
    {
        image: toSrc(viagemImg),
        link: '',
        title: 'Traveling',
        description: 'I enjoy discovering places, living new stories, and stepping out of routine. If the trip is by motorcycle, even better.'
    },
    {
        image: toSrc(lolImg),
        link: '',
        title: 'League of Legends',
        description: 'I play League of Legends casually, proudly sitting in my "Plastic II" rank. In the end, having fun matters more than the ladder.'
    },
    {
        image: toSrc(tccImg),
        link: '',
        title: 'Computer Engineer',
        description: 'I graduated in Computer Engineering from UNIVASF. I am proud of the journey, the challenges, and the project that shaped my education.'
    },
    {
        image: toSrc(bebeImg),
        link: '',
        title: 'My Roots',
        description: 'My family and my roots are my foundation. I am proud to come from the countryside of Bahia and of everything that path taught me.'
    },
    {
        image: toSrc(bicicletaImg),
        link: '',
        title: 'Cycling',
        description: 'The bicycle is where my passion for two wheels began. I ride less than I would like today, but I still love the freedom it brings.'
    },
    {
        image: toSrc(aviaoImg),
        link: '',
        title: 'Airplane Pilot?',
        description: 'I am curious about aviation and everything related to flying. In my spare time I joke about being a pilot, but the passion is real.'
    },
    {
        image: toSrc(lerImg),
        link: '',
        title: 'Reading',
        description: 'I enjoy reading about psychology, behavior, and persuasion. Understanding people also helps me build better products.'
    },
    {
        image: toSrc(ensinarImg),
        link: '',
        title: 'Teaching',
        description: 'I like teaching what I learn. I believe knowledge grows when it is shared in a simple and accessible way.'
    },
    {
        image: toSrc(programarImg),
        link: '',
        title: 'Problem Solving',
        description: 'For me, programming means turning problems into solutions. I like building technology with purpose and practical value.'
    }
];

