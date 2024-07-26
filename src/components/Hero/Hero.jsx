import Image from "next/image";
import React from "react";

const bgImage = {
  backgroundImage: "url(/bg-slate.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[550px] w-full">
        <div className="container">
          {/* navbar section */}
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[450px]">
            {/* text content section  */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14 ">
                Blvck Tumbler
              </h1>
              <div className="relative">
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
              </div>
            </div>
            {/* hero image section  */}
            <div className="relative">
              <div className="relative z-40 h-[300px] aspect-[1/2] md:h-[500px]">
                <Image
                  className="img-shadow"
                  src="/black.png"
                  fill
                  alt="black coffee"
                ></Image>
              </div>
              {/* orange ring circle */}
              <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full z-10 border-[20px]"></div>
              {/* black bg text */}
              <div className="absolute top-10 left-56 z-[1]">
                <h1 className="text-[7rem] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </div>
            </div>
            <div>
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14 ">
                Blvck Tumbler
              </h1>
              <div className="relative">
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
              </div>
            </div>
            </div>
            {/* third div section  */}
            
            
            <div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
