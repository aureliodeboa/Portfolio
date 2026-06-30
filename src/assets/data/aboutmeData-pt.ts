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
        description: 'Café faz parte do meu ritmo: acompanha o começo do dia, as pausas e as boas ideias que aparecem no caminho.'
    },
    {
        image: toSrc(academiaImg),
        link: '',
        title: 'Musculação',
        description: 'Treino musculação desde 2016. É um hábito que fortalece meu corpo, minha disciplina e minha consistência.'
    },
    {
        image: toSrc(jiuImg),
        link: '',
        title: 'Jiu-Jitsu',
        description: 'No Jiu-Jitsu encontro foco, humildade e autocontrole. É onde treino corpo e mente para evoluir um pouco mais a cada dia.'
    },
    {
        image: toSrc(motoImg),
        link: '',
        title: '"Motoca"',
        description: 'Motos representam liberdade, presença e estrada. Gosto da sensação de descobrir novos caminhos sobre duas rodas.'
    },
    {
        image: toSrc(viagemImg),
        link: '',
        title: 'Viajar',
        description: 'Gosto de conhecer lugares, viver novas histórias e sair da rotina. Se a viagem for de moto, a experiência fica ainda melhor.'
    },
    {
        image: toSrc(lolImg),
        link: '',
        title: 'League of Legends',
        description: 'Jogo League of Legends de forma casual, no meu honroso elo "Plástico II". No fim, a diversão vale mais que o ranque.'
    },
    {
        image: toSrc(tccImg),
        link: '',
        title: 'Engenheiro de Computação',
        description: 'Sou formado em Engenharia de Computação pela UNIVASF. Tenho orgulho da jornada, dos desafios e do projeto que marcou minha formação.'
    },
    {
        image: toSrc(bebeImg),
        link: '',
        title: 'Minhas Raízes',
        description: 'Minha família e minha origem são minha base. Tenho orgulho de vir do interior da Bahia e de tudo que essa caminhada me ensinou.'
    },
    {
        image: toSrc(bicicletaImg),
        link: '',
        title: 'Pedalar',
        description: 'A bicicleta foi onde minha paixão por duas rodas começou. Hoje pedalo menos do que gostaria, mas ainda gosto da liberdade que ela traz.'
    },
    {
        image: toSrc(aviaoImg),
        link: '',
        title: 'Piloto de Avião?',
        description: 'Tenho curiosidade por aviação e tudo que envolve voar. Nas horas vagas, brinco que sou piloto, mas a paixão é real.'
    },
    {
        image: toSrc(lerImg),
        link: '',
        title: 'Leitura',
        description: 'Gosto de ler sobre psicologia, comportamento e persuasão. Entender pessoas também ajuda a criar produtos melhores.'
    },
    {
        image: toSrc(ensinarImg),
        link: '',
        title: 'Ensinar',
        description: 'Gosto de ensinar o que aprendo. Acredito que conhecimento cresce quando é compartilhado de forma simples e acessível.'
    },
    {
        image: toSrc(programarImg),
        link: '',
        title: 'Resolver Problemas',
        description: 'Programar, para mim, é transformar problemas em soluções. Gosto de criar tecnologia com propósito e utilidade prática.'
    }
];

