import { FC } from "react";
import Row from "./Row";
import cubes from "@/assets/PhotoSection/cubes.png";
import fiber from "@/assets/PhotoSection/fiber.png";
import laptop from "@/assets/PhotoSection/laptop.png";

const PhotoSection: FC = () => {
  const heading = "Aenean egestas libero amet vulputate.";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit.";

  return (
    <section>
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
        <div className="flex flex-col gap-8">
          <Row heading={heading} text={text} image={laptop} />
          <Row heading={heading} text={text} image={cubes} />
          <Row heading={heading} text={text} image={fiber} />
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
