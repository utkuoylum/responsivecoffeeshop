"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: "url(/bg-slate.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [isSidabarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main style={bgImage}>
      <section className=" relative min-h-[550px] w-full">
        <div className="container">
          {/* navbar section */}
          <Navbar sidebar={() => setIsSidebarOpen(!isSidabarOpen)} />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[550px]">
            {/* text content section  */}
            <div className="text-lightOrange mt-[100px] flex flex-col justify-end gap-14">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-6xl font-bold leading-tight ml-14 "
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <h2 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quidem cum praesentium mollitia veritatis, neque
                    consequuntur nemo dolor excepturi consectetur provident
                    dolorem! Quo possimus nobis quis assumenda vitae culpa,
                    natus molestias?
                  </h2>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* hero image section  */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{once:true}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className="relative z-40 h-[300px] aspect-[1/2] md:h-[500px]"
              >
                <Image
                  className="img-shadow"
                  src="/black.png"
                  fill
                  alt="black coffee"
                ></Image>
              </motion.div>
              {/* orange ring circle */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full z-10 border-[20px]"
              ></motion.div>
              {/* big text  section*/}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute top-10 left-56 z-[1]"
              >
                <h1 className="text-[7rem] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            {/* third div section  */}
            <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
            >
              <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                <h1 className=" opacity-0 text-7xl font-bold leading-tight ml-14 ">
                  Blvck Tumbler
                </h1>
                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">Blvck Tumbler</h1>
                    <h2 className="text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quidem cum praesentium mollitia veritatis convallis sed
                      diam nonum vul tellus et justo er suscipit
                    </h2>
                  </div>
                  <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
                </div>
              </div>
            </motion.div></div>

            <div></div>
          </div>
        </div>
        {/* sidebar menu section */}
        {isSidabarOpen && 
            <motion.aside 
            initial={{x: '100%'}}
            whileInView={{x:0}}
            transition={{
              type: 'spring',
              stiffness: 160,
              damping: 40,
              restDelta: 0.05
    
            }}
            className="absolute right-0 top-0 h-full w-36 bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-40">
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center  gap-6 text-white">
                  {/* line */}
                  <div className="w-[1px] h-[70px] bg-white"></div>
                  {/* social icons */}
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebookF className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaTwitter className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram className="text-2xl" />
                  </div>
                  <div className="w-[1px] h-[70px] bg-white"></div>
                </div>
              </div>
            </motion.aside>}
    
      </section>
    </main>
  );
};

export default Hero;
