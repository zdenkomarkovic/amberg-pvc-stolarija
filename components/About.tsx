import Image from "@/node_modules/next/image";
import React from "react";

const About = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto py-7 md:py-12 space-y-5">
      {" "}
      <p className=" first-letter:pl-6">
        Dobrodošli na zvanični sajt firme{" "}
        <span className="font-bold text-primary">
          Amberg PVC & ALU stolarija
        </span>
        , specijalizovane za proizvodnju i ugradnju visokokvalitetne stolarije
        od aluminijuma i plastike. Sa sedištem u Novom Pazaru, na adresi Slava
        Raškovića 54, već dugi niz godina uspešno sarađujemo sa klijentima širom
        Srbije, nudeći pouzdanost, dugotrajnost i savremen dizajn.
      </p>{" "}
      <p className=" first-letter:pl-6">
        {" "}
        Naša ponuda obuhvata širok spektar proizvoda i rešenja za stambene i
        poslovne objekte, uz korišćenje najkvalitetnijih materijala i profila
        renomiranih proizvođača kao što su{" "}
        <span className="font-bold text-primary">nemački Schüco</span> i{" "}
        <span className="font-bold text-primary">poljski Decco</span>.
      </p>
      <h2 className="text-2xl md:text-6xl text-primary font-bold text-center md:py-10">
        PVC i ALU prozori i vrata po meri
      </h2>
      <p className=" first-letter:pl-6">
        Ukoliko tražite energetski efikasna, estetski dopadljiva i funkcionalna
        rešenja za vaš dom ili poslovni prostor, Amberg vam nudi PVC i
        aluminijumsku stolariju izrađenu po meri. Naši proizvodi kombinuju
        vrhunsku tehnologiju, odličnu izolaciju i moderan izgled.
      </p>
      <p className=" first-letter:pl-6">U ponudi imamo:</p>
      <ul>
        <li>
          <span className=" font-bold text-primary">
            7-komorne nemačke Schüco PVC profile sa troslojnim staklom
          </span>{" "}
          - za maksimalnu termo i zvučnu izolaciju.
        </li>
        <li>
          <span className=" font-bold text-primary">
            6-komorne poljske Decco PVC profile sa dvoslojnim staklom
          </span>{" "}
          - optimalan balans kvaliteta i cene.
        </li>
      </ul>
      <p className=" first-letter:pl-6">
        Svi naši prozori i vrata izrađuju se precizno, uz korišćenje savremenih
        mašina i proverenih komponenti, što garantuje dug vek trajanja i
        minimalno održavanje.
      </p>
      <div className="grid grid-cols-2 gap-3 md:gap-8">
        <div className="">
          <Image
            src={"/decco_62_product.jpg"}
            width={500}
            height={500}
            alt="alu i pvc stolarija"
            className="md:w-2/3 mx-auto"
          />
          <Image
            src={"/header_top_logo.png"}
            width={500}
            height={500}
            alt="alu i pvc stolarija"
            className="w-2/3 md:w-1/3 mx-auto"
          />
        </div>
        <div className="">
          <Image
            src={"/decco_62_product.jpg"}
            width={500}
            height={500}
            alt="alu i pvc stolarija"
            className="md:w-2/3 mx-auto"
          />
          <Image
            src={"/schueco-logo-data.svg"}
            width={500}
            height={500}
            alt="alu i pvc stolarija"
            className="w-2/3 md:w-1/3 mx-auto"
          />
        </div>
      </div>
      <h3 className="text-2xl md:text-6xl text-primary font-bold text-center md:py-10">
        Ugradnja stolarije za dijasporu i projekte u inostranstvu
      </h3>
      <p className=" first-letter:pl-6">
        Amberg PVC & ALU stolarija ponosno nudi usluge proizvodnje i ugradnje
        stolarije za klijente iz dijaspore i međunarodne projekte. Bez obzira da
        li gradite ili renovirate kuću u inostranstvu, mi vam omogućavamo da
        dobijete kvalitet iz Srbije – po najvišim evropskim standardima.
      </p>
    </div>
  );
};

export default About;
