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

export const aboutmeData_pt: AboutMeItemType[] = [
    {
        image: toSrc(cafeImg),
        link: '',
        title: 'Café',
        description: 'Nada como um bom cafézinho para começar o dia, e para terminar o dia.'
    },
    {
        image: toSrc(academiaImg),
        link: '',
        title: 'Musculação',
        description: 'Apaixonado por musculação desde 2016. Meu refúgio, fonte de saúde e disciplina diária.'
    },
    {
        image: toSrc(jiuImg),
        link: '',
        title: 'Jiu-Jitsu',
        description: 'Jiu-Jitsu é meu lugar de paz através da guerra comigo mesmo, onde eu trabalho minha mente e corpo para ser sempre melhor.'
    },
    {
        image: toSrc(motoImg),
        link: '',
        title: '"Motoca"',
        description: 'Minha segunda paixão são motos. A liberdade de viajar sobre duas rodas é incomparável.'
    },
    {
        image: toSrc(viagemImg),
        link: '',
        title: 'Viajar',
        description: 'Amo viajar, e se for de moto, melhor ainda! Explorando lugares como Jacobina-Bahia.'
    },
    {
        image: toSrc(lolImg),
        link: '',
        title: 'League of Legends',
        description: 'Jogador casual de lolzinho no meu Elo "Plástico II". A diversão é o que importa!'
    },
    {
        image: toSrc(tccImg),
        link: '',
        title: 'Engenheiro de Computação',
        description: 'Formado pela UNIVASF. Orgulho do meu TCC e da minha jornada acadêmica.'
    },
    {
        image: toSrc(bebeImg),
        link: '',
        title: 'Minhas Raízes',
        description: 'Amo minha familia minha base, e a cidade da qual eu vim no interior da Bahia. Tenho orgulho de vir do interior.'
    },
    {
        image: toSrc(bicicletaImg),
        link: '',
        title: 'Pedalar',
        description: 'Gosto de explorar de bicicleta. Foi onde nasceu minha paixão por duas rodas, confesso que estou parado dos pedais'
    },
    {
        image: toSrc(aviaoImg),
        link: '',
        title: 'Piloto de Avião?',
        description: 'Nas horas vagas, piloto de avião (Xd). Brincadeiras à parte, adoro aviação.'
    },
    {
        image: toSrc(lerImg),
        link: '',
        title: 'Leitura',
        description: 'Leitor ávido de livros sobre persuasão e psicologia.'
    },
    {
        image: toSrc(ensinarImg),
        link: '',
        title: 'Ensinar',
        description: 'Gosto de ensinar oque sei, e acredito que o conhecimento deve ser compartilhado com o maior número de pessoas possível.'
    },
    {
        image: toSrc(programarImg),
        link: '',
        title: 'Resolver Problemas',
        description: 'Apaixonado por resolver problemas reais utilizando  tecnologia e programação.'
    }
];

