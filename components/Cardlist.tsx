"use client";

import React from "react";
import { workList } from "@/constants/index";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "./ui/card";

const Cardlist = () => {
  return (
    <div className="pt-10 md:pt-16 md:pb-16">
      <div className="container px-4 md:px-40 mx-auto space-y-10">
        <h2 className="text-3xl md:text-6xl text-primary text-center  font-bold">
          Kompletna rešenja vaš prostor
        </h2>
        <p></p>
        <div className=" flex flex-col gap-3 md:gap-4 overflow-hidden">
          {workList.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} // Naizmenično levo/desno
                whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } w-full`}
              >
                <Card className="w-full  md:w-3/4 shadow-lg relative overflow-hidden  bg-transparent">
                  <svg
                    className="absolute inset-0 w-full h-full text-card"
                    viewBox="0 0 256 150"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="0,0 256,0 142,160 0,160"
                      fill="currentColor"
                    />
                  </svg>
                  <CardHeader>
                    <CardTitle className=" md:pl-10 relative z-10 flex gap-5 text-2xl md:text-5xl items-center text-primary">
                      <span className="text-4xl md:text-8xl">
                        {<item.icon />}
                      </span>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cardlist;
