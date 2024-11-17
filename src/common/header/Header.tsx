import React, { Fragment } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { VscGlobe } from "react-icons/vsc";
import { languages } from "../../i18n/i18n";
import config from "../../config/config";
import MenuIcon from "../../assets/icons/MenuIcon";

interface Props {
  scrolled: boolean;
  onMenuClick: () => void;
}

const Header = ({ onMenuClick, scrolled = false }: Props) => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const items = [
    { name: "header.services", link: "#services" },
    { name: "header.gallery", link: "#gallery" },
    { name: "header.testimonials", link: "#testimonials" },
    { name: "header.contacts", link: "contacts" },
  ];

  return (
    <header
      data-scrolled={scrolled}
      className="fixed top-0 w-full z-10 transition-all duration-300 flex justify-center bg-transparent data-[scrolled=true]:bg-white/80 data-[scrolled=true]:backdrop-blur-md data-[scrolled=true]:shadow-md"
    >
      <div className="flex flex-row md:container w-full justify-between pr-[6rem] px-4 h-16 items-center">
        <div className="flex items-center">
          <button type="button" onClick={() => navigate("/")}>
            <img
              src={scrolled ? config.app.icon.light : config.app.icon.dark}
              alt={config.app.name}
              className="h-[1.5rem] w-[1.5rem]"
            />
          </button>
        </div>

        <nav className="hidden md:flex ml-auto gap-8">
          {items.map((item) => (
            <Button
              key={item.name}
              className={`text-sm font-medium ${
                scrolled
                  ? "text-gray-800 hover:text-black"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => navigate(item.link)}
            >
              {t(item.name)}
            </Button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 ml-4">
          <Menu
            as="div"
            className="px-3 pl-0 relative flex"
            aria-label="usermenu"
          >
            <MenuButton
              className="group w-full text-sm text-left font-medium text-gray-700 focus:outline-none"
              aria-label="usermenu-button"
            >
              <span className="flex w-full justify-between items-center">
                <VscGlobe
                  className={cn(
                    "h-5 w-5 cursor-pointer",
                    scrolled
                      ? "text-gray-800 hover:text-black"
                      : "text-gray-300 hover:text-white"
                  )}
                />
              </span>
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems
                aria-label="menu-item-container"
                className="z-10 mx-3 origin-top absolute top-[30px] -left-[60px] right-0 w-fit mt-1 rounded shadow-lg bg-white divide-y divide-gray-200 focus:outline-none"
              >
                <div className="px-1 py-1" aria-label="menu-items">
                  {languages.map((lng) => (
                    <MenuItem key={lng.code}>
                      <Button
                        className={`flex items-center space-x-2 px-4 py-2 text-sm cursor-pointer w-full ${
                          i18n.language === lng.code ? "bg-[#F4F6F8]" : ""
                        }`}
                        onClick={() => i18n.changeLanguage(lng.code)}
                        disabled={i18n.language === lng.code}
                      >
                        <span className={`fi fi-${lng.code}`} />
                        <span>{lng.name}</span>
                      </Button>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>

        <Button
          className="md:hidden absolute right-4 top-5"
          onClick={onMenuClick}
        >
          <MenuIcon fill={scrolled ? "#000" : "#fff"} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
