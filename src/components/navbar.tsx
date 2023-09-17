import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import React, { Dispatch, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import images from '../../public/assets';

const routes: Record<string, Record<'path' | 'name', string>> = {
  exploreNfts: { path: '/', name: 'Explore NFTs' },
  listedNfts: { path: '/created-nfts', name: 'Listed NFTs' },
  myNfts: { path: '/my-nfts', name: 'My NFTs' },
};

const MenuItems = ({
  isMobile,
  active,
  setActive,
}: {
  isMobile: boolean;
  active: string;
  setActive: Dispatch<string>;
}) => (
  <ul
    className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}
  >
    {Object.values(routes).map((item, index) => (
      <li
        key={index}
        onClick={() => {
          setActive(item.name);
        }}
        className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 ${
          active === item.name
            ? 'dark:text-white text-nft-black-1'
            : 'dark:text-nft-gray-3 text-nft-gray-2'
        }`}
      >
        <Link href={item.path}>{item.name}</Link>
      </li>
    ))}
  </ul>
);

const ButtonGroup = ({
  setActive,
  router,
}: {
  setActive: Dispatch<string>;
  router: AppRouterInstance;
}) => {
  const hasConnected = true;

  return hasConnected ? (
    <Button
      title="Create"
      className="mx-2 rounded-xl"
      handleClick={() => {
        setActive('');

        router.push('/create-nft');
      }}
    />
  ) : (
    <Button
      title="Connect"
      className="mx-2 rounded-xl"
      handleClick={() => {}}
    />
  );
};

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [active, setActive] = useState(routes.exploreNfts.name);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div
            className="flexCenter md:hidden cursor-pointer"
            onClick={() => {}}
          >
            <Image
              src={images.logo02}
              alt="logo"
              objectFit="contain"
              width={32}
              height={32}
            />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
              CryptoKet
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex" onClick={() => {}}>
            <Image
              src={images.logo02}
              alt="logo"
              objectFit="contain"
              width={32}
              height={32}
            />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
              CryptoKet
            </p>
          </div>
        </Link>
      </div>

      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>

        <div className="md:hidden flex">
          <MenuItems isMobile={false} active={active} setActive={setActive} />
          <div className="ml-4">
            <ButtonGroup router={router} setActive={setActive} />
          </div>
        </div>
      </div>

      <div className="hidden md:flex ml-2">
        {isOpen ? (
          <Image
            src={images.cross}
            alt="close"
            objectFit="contain"
            width={20}
            height={20}
            onClick={() => {
              setIsOpen(false);
            }}
            className={theme === 'light' ? 'filter invert' : ''}
          />
        ) : (
          <Image
            src={images.menu}
            alt="menu"
            objectFit="contain"
            width={25}
            height={25}
            onClick={() => {
              setIsOpen(true);
            }}
            className={theme === 'light' ? 'filter invert' : ''}
          />
        )}

        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems isMobile active={active} setActive={setActive} />
            </div>
            <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
              <ButtonGroup setActive={setActive} router={router} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
