import { Feature } from "@/types/feature";
import launchpad from "@/assets//features/launchpad.svg";
import midle from "@/assets//features/midle.svg";
import gamiMove from "@/assets//features/gamiMove.svg";
import corein from "@/assets//features/corein.svg";
import tools from "@/assets//features/tools.svg";
import toolsWhite from "@/assets//features/tools-white.svg";
import coreinWhite from "@/assets//features/corein-white.svg";
import gamiMoveWhite from "@/assets//features/gamiMove-white.svg";
import midleWhite from "@/assets//features/midle-white.svg";
import launchpadWhite from "@/assets//features/launchpad-white.svg";

export const features: Feature[] = [
  {
    id: 1,
    logo: launchpad,
    logoWhite: launchpadWhite,
    heading: "Launchpad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
    link: "visit",
  },
  {
    id: 2,
    logo: midle,
    logoWhite: midleWhite,
    heading: "Midle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
    link: "visit",
  },
  {
    id: 3,
    logo: gamiMove,
    logoWhite: gamiMoveWhite,
    heading: "Move",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
    link: "visit",
  },
  {
    id: 4,
    logo: corein,
    logoWhite: coreinWhite,
    heading: "Corein",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
    link: "visit",
  },
  {
    id: 5,
    logo: tools,
    logoWhite: toolsWhite,
    heading: "Tools",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
    link: "visit",
  },
];
