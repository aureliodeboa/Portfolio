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
        description: 'Nothing beats a good cup of coffee to start the day, and to end the day.'
    },
    {
        image: toSrc(academiaImg),
        link: '',
        title: 'Gym',
        description: 'Passionate about weightlifting since 2016. My refuge, source of health and daily discipline.'
    },
    {
        image: toSrc(jiuImg),
        link: '',
        title: 'Jiu-Jitsu',
        description: 'Jiu-Jitsu is my place of peace through the battle with myself, where I work my mind and body to always be better.'
    },
    {
        image: toSrc(motoImg),
        link: '',
        title: '"Motorcycle"',
        description: 'My second passion is motorcycles. The freedom of traveling on two wheels is incomparable.'
    },
    {
        image: toSrc(viagemImg),
        link: '',
        title: 'Traveling',
        description: 'I love to travel, and if it\'s by motorcycle, even better! Exploring places like Jacobina-Bahia.'
    },
    {
        image: toSrc(lolImg),
        link: '',
        title: 'League of Legends',
        description: 'Casual LoL player in my "Plastic II" Elo. Having fun is what matters!'
    },
    {
        image: toSrc(tccImg),
        link: '',
        title: 'Computer Engineer',
        description: 'Graduated from UNIVASF. Proud of my thesis and my academic journey.'
    },
    {
        image: toSrc(bebeImg),
        link: '',
        title: 'My Roots',
        description: 'I love my family, my foundation, and the city I came from in the interior of Bahia. I\'m proud to come from the countryside.'
    },
    {
        image: toSrc(bicicletaImg),
        link: '',
        title: 'Cycling',
        description: 'I like to explore by bicycle. That\'s where my passion for two wheels was born, I confess I\'m currently out of the pedals'
    },
    {
        image: toSrc(aviaoImg),
        link: '',
        title: 'Airplane Pilot?',
        description: 'In my spare time, I\'m an airplane pilot (Xd). Jokes aside, I love aviation.'
    },
    {
        image: toSrc(lerImg),
        link: '',
        title: 'Reading',
        description: 'Avid reader of books on persuasion and psychology.'
    },
    {
        image: toSrc(ensinarImg),
        link: '',
        title: 'Teaching',
        description: 'I like to teach what I know, and I believe knowledge should be shared with as many people as possible.'
    },
    {
        image: toSrc(programarImg),
        link: '',
        title: 'Problem Solving',
        description: 'Passionate about solving real problems using technology and programming.'
    }
];

