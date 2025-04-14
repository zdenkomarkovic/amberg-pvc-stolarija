import Cards3 from "@/components/Cards3";
import PozoviteNasOdmahImage2 from "@/components/PozoviteNasOdmahImage2";
import { cards1Data } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";

const page = () => {
  return (
    <div className="py-16">
      <h1 className="container px-2 md:px-4 mx-auto text-center text-2xl md:text-4xl text-primary font-bold py-6">
        ALU Stolarija – Snaga, elegancija i dugovečnost
      </h1>
      <Image
        src={"/hero2.jpg"}
        width={500}
        height={500}
        alt="alu stolarija"
        className="md:hidden w-full h-[150px] object-cover"
      />

      <Image
        src={"/2979.jpg"}
        width={500}
        height={500}
        alt="alu stolarija"
        className="hidden md:block w-full h-[200px] object-cover"
      />
      <div className="container px-2 md:px-4 mx-auto space-y-6 py-6">
        <p className="first-letter:pl-6">
          ALU stolarija predstavlja vrhunac savremene arhitekture – savršen
          izbor za moderne objekte, velike staklene površine i sve one koji
          traže spoj elegancije, čvrstine i dugotrajnosti. U firmi Amberg PVC &
          ALU stolarija izrađujemo aluminijumske prozore, vrata i fasadne
          sisteme po meri, koristeći najkvalitetnije materijale i preciznu
          obradu.
        </p>
        <h2 className="text-primary font-bold text-xl md:text-3xl">
          Najkvalitetniji na tržištu 6-komorni i 7-komorni Schüco i Decco
          profili, za vas gde god da se nalazite u Evropi, Nemačkoj ili Srbiji
        </h2>
        <p className="first-letter:pl-6">
          Da bi vasa aluminijumska stolarija imala i izgled i funkciju i
          dugotrajnost, bilo da su to vrata, prozori, izlozi ili klizni sistemi
        </p>
        <h2 className="text-primary font-bold text-xl md:text-3xl">
          ALU Prozori – Minimalizam i maksimalna svetlost
        </h2>
        <p className="first-letter:pl-6">
          Aluminijumski prozori odlikuju se tankim profilima i izuzetnom
          čvrstoćom, što omogućava veće staklene površine i više prirodnog
          svetla. Dostupni su u raznim bojama, uključujući antracit, crnu, belu
          i metalik nijanse, sa mogućnošću termo-prekida za bolju izolaciju.
          Idealan su izbor za moderne objekte i poslovne prostore.
        </p>
        <h2 className="text-primary font-bold text-xl md:text-3xl">
          ALU Vrata – Elegancija uz sigurnost
        </h2>
        <p className="first-letter:pl-6">
          ALU ulazna vrata pružaju vrhunsku sigurnost, luksuzan izgled i
          izuzetnu otpornost na sve vremenske uslove. Mogu biti u kombinaciji sa
          staklenim ispunama, dekorativnim panelima i naprednim sigurnosnim
          bravama, a dostupna su i u kliznim ili preklopnim (harmonika)
          varijantama.
        </p>
      </div>
      <PozoviteNasOdmahImage2 />
      <Cards3
        title={"Amberg stolarija, najbolje rešenje za vas"}
        data={cards1Data}
      />
    </div>
  );
};

export default page;
