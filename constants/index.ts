import { IconType } from "react-icons";
import { GiWeight } from "react-icons/gi";
import { LuTimerReset } from "react-icons/lu";
import { GiWindow } from "react-icons/gi";
import { TbWindow } from "react-icons/tb";
import { MdOutlineSensorWindow } from "react-icons/md";
import { BiWindowOpen } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { TfiLayoutSlider } from "react-icons/tfi";
import { BsShopWindow } from "react-icons/bs";
import { MdDoorSliding } from "react-icons/md";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineSavings } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { FaPersonThroughWindow } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "PVC Stolarija",
    link: "/pvcstolarija",
  },
  {
    title: "ALU Stolarija",
    link: "/alustolarija",
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
    icon: TbWindow,
  },
  {
    id: 2,
    title: "Roletne",
    text: "",
    icon: BiWindowOpen,
  },
  {
    id: 3,
    title: "Komarnici",
    text: "",
    icon: MdOutlineSensorWindow,
  },
  {
    id: 4,
    title: "Garažna vrata",
    text: "",
    icon: GiHomeGarage,
  },
  {
    id: 5,
    title: "Industrijska vrata",
    text: "",
    icon: LiaIndustrySolid,
  },
  {
    id: 6,
    title: "Klizni sistemi",
    text: "",
    icon: TfiLayoutSlider,
  },
  {
    id: 7,
    title: "Harmonike",
    text: "",
    icon: MdDoorSliding,
  },
  {
    id: 8,
    title: "Izlozi",
    text: "",
    icon: BsShopWindow,
  },
  {
    id: 9,
    title: "Žaluzine",
    text: "",
    icon: GiWindow,
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
    icon: LiaBusinessTimeSolid,
    title: "",
    text: "Dugogodišnje iskustvo i pouzdana usluga",
  },
  {
    id: 2,
    icon: LiaShippingFastSolid,
    title: "",
    text: " Brza montaža u Srbiji i inostranstvu – naročito u Nemačkoj, Švajcarskoj, Francuskoj i Austriji",
  },
  {
    id: 3,
    icon: HiOutlineHomeModern,
    title: "",
    text: "Estetski prilagodljiva rešenja za vaš dom ili poslovni prostor",
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
    icon: VscWorkspaceTrusted,
    title: "",
    text: "Kvalitet bez kompromisa – sarađujemo isključivo sa proverenim evropskim proizvođačima profila",
  },
  {
    id: 2,
    icon: FaPersonThroughWindow,
    title: "",
    text: "Individualan pristup - svaki projekat je jedinstven, a mi se trudimo da uvek pronađemo najbolje rešenje za vaše potrebe",
  },
  {
    id: 3,
    icon: VscTools,
    title: "",
    text: "Precizna montaža - naši iskusni majstori garantuju profesionalnu i brzu ugradnju",
  },
  {
    id: 4,
    icon: MdOutlineSavings,
    title: "",
    text: "Energetska efikasnost – uz naše proizvode štedite energiju i smanjujete troškove grejanja i hlađenja",
  },
  {
    id: 5,
    icon: HiOutlineHomeModern,
    title: "",
    text: "Moderna estetika – naši sistemi savršeno se uklapaju u tradicionalne i savremene objekte",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Bilo da renovirate stan, gradite kuću ili opremate poslovni prostor, Amberg je pravi izbor za vas. Poverite nam svoj prostor i dobićete stolariju koja zadovoljava najviše standarde - po meri vaših želja.",
};
