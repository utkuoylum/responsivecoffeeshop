'use client'
import Image from "next/image";
import React from "react";
import worldMap from "/public/world-map.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section  */}
        <div className="space-y-8">
          <motion.h2 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping:10,
            resDelta: 0.1,
            delay: 0.2
          }}
          className="text-4xl font-bold text-darkGray font-serif">Buy our products from anywhere </motion.h2>
          <motion.div 
           initial={{opacity:0, y:100}}
           whileInView={{opacity:1, y:0}}
           transition={{
            type: 'spring',
            stiffness: 100,
            damping:10,
            resDelta: 0.1,
             delay: 0.4
           }}
          className="flex items-center gap-4">
            <input type="text" placeholder="Name" className="input-style w-full lg:w-[150px]"/>
            <input type="email" placeholder="Email" className="input-style w-full"/>
          </motion.div>
          <motion.div 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping:10,
            resDelta: 0.1,
            delay: 0.6
          }}
          className="flex items-center gap-4">
            <input type="text" placeholder="Country" className="input-style w-full "/>
            <input type="text" placeholder="Zipcode" className="input-style w-full lg:w-[150px]"/>
          </motion.div>

          <motion.button 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping:10,
            resDelta: 0.1,
            delay: 0.8
          }}
          className="primary-btn w-full">Order Now</motion.button>
        </div>
        {/* map section  */}
        <motion.div 
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping:10,
          resDelta: 0.1,
          delay: 1
        }}
        className="col-span-2">
          <Image src={worldMap} alt="world map" className="w-full sm:w-[500px] mx-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhereToBuy;
