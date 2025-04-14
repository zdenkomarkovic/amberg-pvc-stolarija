import Cards3 from "@/components/Cards3";
import PozoviteNasOdmahImage2 from "@/components/PozoviteNasOdmahImage2";
import { cards1Data } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";

const page = () => {
  return (
    <div className="py-16">
      <h1 className="container px-2 md:px-4 mx-auto text-center text-2xl md:text-4xl text-primary font-bold py-6">
        PVC Stolarija – Energetski efikasna, dugotrajna i estetski prilagodljiva
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
          PVC stolarija je savremen izbor za sve koji žele toplotnu i zvučnu
          izolaciju, lako održavanje i dug vek trajanja. U firmi Amberg PVC &
          ALU stolarija, specijalizovani smo za proizvodnju i ugradnju PVC
          prozora i vrata po meri, uz vrhunske materijale i savremenu
          tehnologiju.
        </p>
        <h2 className="text-primary font-bold text-xl md:text-3xl">
          Visok kvalitet materijala i provereni 6-komorni i 7-komorni Schüco i
          Decco profili, za vas gde god da se nalazite u Evropi, Nemačkoj ili
          Srbiji
        </h2>
        <p className="first-letter:pl-6">
          Rezultat? Odlična izolacija, niži računi za grejanje i hlađenje, kao i
          bolja akustična zaštita.
        </p>
        <h2 className="text-primary font-bold text-xl md:text-3xl">
          PVC Prozori – Praktičnost i estetika
        </h2>
        <p className="first-letter:pl-6">
          Naši PVC prozori su dostupni u različitim dimenzijama, oblicima i
          bojama – uključujući bele, antracit sive i dekor drveta. Mogu se
          kombinovati sa roletnama, komarnicima i žaluzinama za dodatnu
          funkcionalnost.
        </p>
        <h2 className="text-primary font-bold text-xl md:text-3xl">
          PVC Vrata – Sigurnost i stil
        </h2>
        <p className="first-letter:pl-6">
          PVC ulazna vrata pružaju dobru termoizolaciju, lako se održavaju i
          dolaze sa mogućnošću ugradnje sigurnosnih brava, ukrasnih panela i
          staklenih ispuna.
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
