import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Pvc i Alu Stolarija",
    list: [
      {
        title: "Prozori i Vrata",
        link: "",
      },
      {
        title: "Roletne",
        link: "",
      },
      {
        title: "Komarnici",
        link: "",
      },
      {
        title: "Garazna vrata",
        link: "",
      },
      {
        title: "Industrijska vrata",
        link: "",
      },
      {
        title: "Klizni sistemi",
        link: "",
      },
      {
        title: "Harmonika vrata",
        link: "",
      },
      {
        title: "Žaluzine",
        link: "",
      },
    ],
  },
  {
    title: "Proizvodi",
    link: "/proizvodi",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "PVC i ALU prozori i vrata",
    text: "",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Roletne",
    text: "",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Komarnici",
    text: "",
    icon: IoIosPerson,
  },
  {
    id: 4,
    title: "Garažna vrata",
    text: "",
    icon: IoFitnessOutline,
  },
  {
    id: 5,
    title: "Industrijska vrata",
    text: "",
    icon: IoFitnessOutline,
  },
  {
    id: 6,
    title: "Klizni sistemi",
    text: "",
    icon: GiWeightLiftingUp,
  },
  {
    id: 7,
    title: "Harmonike",
    text: "",
    icon: GiWeightLiftingUp,
  },
  {
    id: 8,
    title: "Izlozi",
    text: "",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 9,
    title: "Žaluzine",
    text: "",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Srbija i inostranstvo",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "",
    text: "Kvalitet bez kompromisa – sarađujemo isključivo sa proverenim evropskim proizvođačima profila",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "",
    text: "Individualan pristup - svaki projekat je jedinstven, a mi se trudimo da uvek pronađemo najbolje rešenje za vaše potrebe",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Industrijski elektro ormani",
    text: "Precizna montaža - naši iskusni majstori garantuju profesionalnu i brzu ugradnju",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Industrijski elektro ormani",
    text: "Energetska efikasnost – uz naše proizvode štedite energiju i smanjujete troškove grejanja i hlađenja",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Industrijski elektro ormani",
    text: "Moderna estetika – naši sistemi savršeno se uklapaju u tradicionalne i savremene objekte",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Bilo da renovirate stan, gradite kuću ili opremate poslovni prostor, Amberg je pravi izbor za vas. Poverite nam svoj prostor i dobićete stolariju koja zadovoljava najviše standarde - po meri vaših želja.",
};
