import { FC } from "react";

type Props = {
  heading: string;
  text: string;
  image: string;
};

const Row: FC<Props> = ({ heading, text, image }) => {
  return (
    <div
      className={`
    flex w-full flex-col  items-center gap-5
    ${
      image === "/src/assets/PhotoSection/cubes.png"
        ? "md:flex-row-reverse"
        : "md:flex-row"
    }
    `}
    >
      <div className="flex w-full flex-col gap-4 md:w-1/2">
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">{heading}</h1>
        <p className="text-lg font-normal text-extendedBlue">{text}</p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={image} alt="" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Row;
