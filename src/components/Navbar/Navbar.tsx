import { FC, useState } from 'react';
import logo from '@/assets/logo.svg';
import { Link } from 'react-router-dom';

interface Navbar {
  id: number;
  name: string;
  href: string;
  current: boolean;
}

const Navbar: FC = () => {
  const [navigation, setNavigation] = useState<Navbar[]>([
    { id: 1, name: 'Home', href: '/', current: true },
    { id: 2, name: 'What We Do', href: '#', current: false },
    { id: 3, name: 'GAMI Statistics', href: '#', current: false },
    { id: 4, name: 'Contact Us', href: 'contact', current: false },
  ]);

  return (
    <div className="relative flex h-[72px] w-full justify-between overflow-visible px-4 md:px-20  lg:border-b  lg:border-gray-100">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="" className="my-auto h-12 w-12" />
      </Link>

      <ul className="hidden items-center lg:flex">
        {navigation.map((item) => (
          <Link
            to={item.href}
            key={item.id}
            onClick={() => {
              setNavigation(
                navigation.map((prev) =>
                  prev.id === item.id ? { ...prev, current: true } : { ...prev, current: false },
                ),
              );
            }}
            className={`relative bottom-[-7px] flex h-[59px]  items-center px-[29px]  ${
              item.current
                ? 'rounded-xl rounded-bl-none rounded-br-none border border-b-0 border-gray-100 bg-bodyBg   text-black '
                : 'text-gray-300 '
            } cursor-pointer `}
          >
            {item.name}
          </Link>
        ))}
      </ul>
      <button
        type="button"
        className="my-auto h-[52px] justify-end rounded-md bg-mainBlue px-4 text-sm font-semibold text-white hover:bg-extendedBlue md:px-8"
      >
        Buy GAMI
      </button>
    </div>
  );
};

export default Navbar;
