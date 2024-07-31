'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const BannerStyle = {
  backgroundImage: "url('/coffee-cover.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.p 
            initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y:0}}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 0.2
            }}
            className="text-2xl text-center sm:text-4xl font-semibold">
           Download the app
            </motion.p>
            <motion.p
            initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y:0}}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 0.3
            }}
            className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              natus cumque esse, eum doloribus
            </motion.p>
            {/* images link  */}
            <motion.div 
            initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y:0}}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 0.3
            }}
            className="flex justify-evenly items-center">
              <Link href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                <Image src='/website/app_store.png' alt="app store image" width={200} height={300}/>
              </Link>
              <Link href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                <Image src='/website/play_store.png' alt="play store image" width={200} height={300}/>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
