import { FC } from "react";
import logo from "@/assets/logo.svg";
import twitter from "@/assets/icons/twitter.svg";
import telegram from "@/assets/icons/telegram.svg";
import youtube from "@/assets/icons/youtube.svg";
import medium from "@/assets/icons/medium.svg";

interface Footer {
  id: number;
  name: string;
  href: string;
  current: boolean;
}

const Footer: FC = () => {
  const navigation: Footer[] = [
    { id: 1, name: "Home", href: "#", current: true },
    { id: 2, name: "What We Do", href: "#", current: false },
    { id: 3, name: "GAMI Statistics", href: "#", current: false },
    { id: 4, name: "Contact Us", href: "#", current: false },
  ];
  return (
    <div className="flex w-full flex-col  items-center gap-2  px-3 py-3">
      <div className="relative flex w-full items-center justify-between overflow-hidden md:px-20">
        <img src={logo} alt="" className="h-8 w-8 md:h-12 md:w-12 " />
        <div className=" items-center  lg:flex">
          <ul className="hidden h-full items-end gap-5 lg:flex ">
            {navigation.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.current ? "text-black " : "text-gray-500"
                } cursor-pointer p-4`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={twitter}
            alt=""
            className="h-5 w-5 cursor-pointer md:h-8  md:w-8"
          />
          <img
            src={telegram}
            alt=""
            className="h-5 w-5 cursor-pointer md:h-8  md:w-8"
          />
          <img
            src={youtube}
            alt=""
            className="h-5 w-5 cursor-pointer md:h-8  md:w-8"
          />
          <img
            src={medium}
            alt=""
            className="h-5 w-5 cursor-pointer md:h-8  md:w-8"
          />
        </div>
      </div>
      <span className="mr-2  text-xs text-gray-500">
        © 2023 GAMI. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
