import { motion } from "framer-motion";
import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
motion

const Navbar = ({sidebar}) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-[999]">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-2xl font-semibold uppercase"><span className="text-primary">Coders</span> Coffee</motion.h1>
          {/* Hamburger section */}
          <motion.div initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}>
            <GiHamburgerMenu className="cursor-pointer" onClick={sidebar}/>
          </motion.div>
        </div>
        

      </div>
    </nav>
  );
};

export default Navbar;
