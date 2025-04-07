"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className=" py-8 bg-primary text-muted shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2">
              <li>
                <Link href="/" className=" hover:text-muted-foreground">
                  Početna
                </Link>
              </li>

              <li>
                <Link href="/usluge" className="hover:text-muted-foreground">
                  Usluge
                </Link>
              </li>

              <li>
                <Link href="/kontakt" className="hover:text-muted-foreground">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+381644804807">
                <p className="hover:text-muted-foreground">
                  Telefon: +38164/480-4807
                </p>
              </a>
              <a href="tel:+381654207420">
                <p className="hover:text-muted-foreground">
                  Telefon: +38165/420-7420
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:ambergdoo@gmail.com" target={"_blank"}>
                <p className="hover:text-muted-foreground">
                  Email: ambergdoo@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/ambergdoo/"
                target={"_blank"}
                className="hover:text-muted-foreground"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center ">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">
              Amberg PVC & ALU stolarija
            </h3>

            <p className=" font-bold ">Kvalitet koji traje</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t-[1px] border-cool-green mt-10 pt-5">
          <p>&copy; 2025 Amberg. Sva prava zadržana.</p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            izrada sajta:{" "}
            <span className="font-bold hover:text-muted-foreground">
              {" "}
              ManikamWebSolutions
            </span>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
