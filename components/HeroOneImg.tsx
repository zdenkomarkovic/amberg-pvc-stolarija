"use client";

import Hero3 from "../public/hero3.jpg";
import Image from "next/image";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
      <Image
        src={Hero3}
        alt="slep puric"
        fill
        className="w-full h-[100dvh] object-cover"
      />

      <div className="relative container px-2 md:px-4 mx-auto  flex flex-col gap-6 items-center justify-center z-[1] ">
        <h1 className="text-primary text-2xl md:text-7xl font-bold px-4">
          Amberg PVC & ALU stolarija
        </h1>
        <h2 className="text-muted font-medium text-2xl md:text-5xl">
          PVC i ALU stolarija Novi Pazar
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <a href="tel:+3816000000">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-muted px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium"
            >
              <PhoneIcon className="w-[18px]" />
              Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
