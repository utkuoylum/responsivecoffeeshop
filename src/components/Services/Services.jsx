'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    image: '/coffee/coffee1.png',
    title: 'Black Coffee',
    subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    image: '/coffee/coffee3.png',
    title: 'Hot Coffee',
    subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    image: '/coffee/coffee1.png',
    title: 'Cold Coffee',
    subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
]

const cardVariants = {
  hidden: {
    opacity:0 , y: 20
  },
  visible: {
    opacity:1, y:0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 10,
      ease: 'easeInOut'
    }
  }
}

const containerVariants = {
  hidden: {
    opacity:1
  },
  visible: {
    opacity:1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4
    }
  }
}

const Services = () => {
  return <div className="container my-16 space-y-4">
{/* header section */}
<div className="text-center max-w-lg mx-auto space-y-2">
  <motion.h3 
  initial={{opacity:0, y:100}}
  whileInView={{opacity:1, y:0}}
  transition={{
    type: 'spring',
    stiffness: 150,
    damping: 10,
    delay: 0.2,
    restDelta: 0.01
  }}
  className="text-3xl font-bold text-lightGray">
    Fresh and <span className="text-primary">Tasty coffee</span>
  </motion.h3>
  <motion.p 
   initial={{opacity:0, scale: 0.5}}
   whileInView={{opacity:0.5, scale:1}}
   transition={{
     type: 'spring',
     stiffness: 150,
     damping: 10,
     delay: 0.6,
     restDelta: 0.01
   }}
  className="text-sm omotion.pacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nisi ut dolor maiores ab suscipit odit alias laborum inventore nam perspiciatis, dignissimos modi at! Iusto incidunt doloribus id ex possimus.
     </motion.p>
</div>
{/* card section  */}
<motion.div 
variants={containerVariants}
initial='hidden'
whileInView={'visible'}
viewport={{amount: 0.8}}
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 content-center">
  {servicesData.map(({id, image, title, subtitle}, index) => {
    return (
    <motion.div 
    variants={cardVariants}
    key={id} className="text-center p-4 space-y-6">
    <div className= 'w-full max-w-[200px] mx-auto hover:scale-110 duration-300 aspect-[1/1] relative'>
      <Image className="img-shadow2" src={image} alt={title} fill/>
    </div>
    <div className="space-y-2">
      <h4 className="text-2xl font-bold text-primary">{title}</h4>
      <h5 className="text-darkGray">{subtitle}</h5>
    </div>
    </motion.div>
    )
  })}
</motion.div>
  </div>;
};

export default Services;
