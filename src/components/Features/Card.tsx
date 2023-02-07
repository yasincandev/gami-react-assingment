import { FC, useState } from "react";
import ReactCardFlip from "react-card-flip";

type Props = {
  feature: {
    id: number;
    logo: string;
    logoWhite: string;
    heading: string;
    description: string;
    link: string;
  };
};

const Card: FC<Props> = ({ feature }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className="flip-card flex h-[250px] flex-col items-center justify-between gap-6 rounded-lg bg-white p-4 shadow-lg "
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
      >
        <img src={feature.logo} alt={feature.heading} className="h-20 w-20 " />
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-lg font-semibold">{feature.heading}</h3>
          <p className="text-sm text-gray-300">{feature.description}</p>
          <p className="text-sm font-normal underline">{feature.link}</p>
        </div>
      </div>
      <div
        className="flip-card flex h-[250px] flex-col items-center justify-between gap-6 rounded-lg bg-mainBlue p-4 text-white shadow-lg"
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
      >
        <img
          src={feature.logoWhite}
          alt={feature.heading}
          className="h-20 w-20 "
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-lg font-semibold ">{feature.heading}</h3>
          <p className="text-sm ">{feature.description}</p>
          <p className="text-sm font-normal  underline">{feature.link}</p>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
