import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../../public/website/credit-cards.webp";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section  */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase">Coders Cafe</h2>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eveniet deserunt nemo, harum, sunt maxime distinctio
              voluptatibus unde quam praesentium dolore ipsum laudantium
              quibusdam vel temporibus totam maiores possimus deleniti.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation /> Ku'damm Berlin
              </p>
            </div>
          </div>
          {/* footer links section  */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* first col  */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* second col  */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          {/* social links section  */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Follow Us</h2>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
              <Image  src='/website/credit-cards.webp' alt='credit cards' width={200} height={200}/>
            </div>
          </div>
        </div>
        <p className="text-white text-center mt-8 pt-8 border-t-2">Copyright &copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
