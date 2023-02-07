import { features } from "@/data/features";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Feature from "./Feature";

const Features = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <section className="w-full bg-gray-400">
      <div className="mx-auto mt-6 max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm ">
          <h2 className="mb-4 text-base font-extrabold tracking-tight lg:text-4xl ">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="mb-8 text-sm font-light md:text-xl lg:mb-16 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Feature key={`card-${feature.id}`} feature={feature} />
          ))}
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div
              className="flip-card flex h-[250px] flex-col items-center justify-center gap-6  rounded-lg bg-white bg-galatasaray  bg-contain bg-center bg-no-repeat  p-4 shadow-lg"
              onMouseEnter={() => setIsFlipped((prev) => !prev)}
            >
              <span className="z-10 text-xs tracking-tight text-darkBlue">
                Official Web 3.0, Metaverse, P2E Partner of
              </span>
              <h3 className="z-10 w-full text-4xl font-bold text-darkBlue ">
                Galatasaray S.K.
              </h3>
            </div>
            <div
              className="flip-card flex h-[250px] flex-col items-center justify-center gap-6 rounded-lg bg-mainBlue bg-galatasaray   bg-contain bg-center bg-no-repeat p-4 shadow-lg"
              onMouseLeave={() => setIsFlipped((prev) => !prev)}
            >
              <span className="z-10 text-xs tracking-tight text-white">
                Official Web 3.0, Metaverse, P2E Partner of
              </span>
              <h3 className="z-10 w-full text-4xl font-bold text-white ">
                Galatasaray S.K.
              </h3>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </section>
  );
};

export default Features;
