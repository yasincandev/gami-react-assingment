import { FC } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import logoAnimation from "@/assets/lottie/logoAnimation.json";

const Hero: FC = () => {
  return (
    <div className=" mx-auto mt-20 flex max-w-screen-xl flex-col justify-center gap-8 p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
      <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
        <h1 className="text-3xl font-bold leading-none md:text-4xl lg:text-6xl">
          Lorem Ipsum Dolor Sit Amet
        </h1>
        <p className="mt-6 mb-8 text-base font-normal text-extendedBlue lg:text-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
          sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
        </p>
        <div className="mt-6 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-mainBlue hover:bg-gray-400 md:py-4 md:px-10 md:text-lg"
            >
              Explore GAMI
            </button>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-mainBlue  hover:bg-gray-400 md:py-4 md:px-10 md:text-lg"
            >
              Buy GAMI
            </button>
          </div>
        </div>
      </div>
      <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
        <Player autoplay loop src={logoAnimation} />
      </div>
    </div>
  );
};

export default Hero;
