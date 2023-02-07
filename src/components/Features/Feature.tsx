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

type CardProps = {
  image: string;
  heading: string;
  description: string;
  link: string;
  className: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Feature: FC<Props> = ({ feature }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card
        image={feature.logo}
        heading={feature.heading}
        description={feature.description}
        link={feature.link}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="bg-white text-mainBlue"
      />
      <Card
        image={feature.logoWhite}
        heading={feature.heading}
        description={feature.description}
        link={feature.link}
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="bg-mainBlue text-white"
      />
    </ReactCardFlip>
  );
};

export default Feature;

const Card: FC<CardProps> = ({
  image,
  heading,
  description,
  link,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`flex h-[250px] flex-col items-center justify-between gap-6 rounded-lg p-4 shadow-lg  ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={image} alt={heading} className="h-20 w-20 " />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-lg font-semibold">{heading}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <p className="text-sm font-normal underline">{link}</p>
      </div>
    </div>
  );
};
