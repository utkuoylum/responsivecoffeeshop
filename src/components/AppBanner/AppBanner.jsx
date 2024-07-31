import React from "react";
import bannerImg from "/public/coffee-cover.jpg";
import appStoreImg from "/public/website/app_store.png";
import playStoreImg from "/public/website/play_store.png";
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
            <p className="text-2xl text-center sm:text-4xl font-semibold">
              Download the app
            </p>
            <p className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              natus cumque esse, eum doloribus
            </p>
            {/* images link  */}
            <div className="flex justify-evenly">
              <Link href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                <Image src='/website/app_store.png' alt="app store image" width={200} height={300}/>
              </Link>
              <Link href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                <Image src={playStoreImg} alt="play store image" width={200} height={300}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
