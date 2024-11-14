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
  isScrolled: boolean;
  onMenuClick: () => void;
}

const Header = ({ isScrolled, onMenuClick }: Props) => {
  const navigate = useNavigate();

  const { i18n, t } = useTranslation();

  const items = [
    { name: "header.services", link: "#services" },
    { name: "header.gallery", link: "#gallery" },
    { name: "header.testimonials", link: "#testimonials" },
    { name: "header.contacts", link: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-10 transition-all duration-300 flex justify-center",
        {
          "bg-white/80 backdrop-blur-md shadow-md": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      <div className="flex flex-row md:container w-full justify-between px-4 h-16 items-center">
        <div className="flex items-center">
          <button type="button" onClick={() => navigate("/")}>
            <img
              src={isScrolled ? config.app.icon.light : config.app.icon.dark}
              alt={config.app.name}
              className="h-[3rem] w-[3rem]"
            />
          </button>
        </div>

        <nav className="hidden md:flex ml-auto gap-8">
          {items.map((item) => (
            <Button
              key={item.name}
              className={cn("text-sm font-medium", {
                "text-gray-800 hover:text-black": isScrolled,
                "text-gray-300 hover:text-white": !isScrolled,
              })}
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
              className="group w-full  text-sm text-left font-medium text-gray-700 focus:outline-none"
              aria-label="usermenu-button"
            >
              <span className="flex w-full justify-between items-center">
                <VscGlobe
                  className={cn("h-5 w-5 cursor-pointer", {
                    "text-gray-800 hover:text-black": isScrolled,
                    "text-gray-300 hover:text-white": !isScrolled,
                  })}
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
                className="z-10 mx-3 origin-top absolute left-[-36px] sm:left-[-25px] md:left-[-25px] top-[30px] xl:left-[-80px] right-0 w-fit mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
              >
                <div className="px-1 py-1 " aria-label="menu-items">
                  {languages.map((lng) => (
                    <MenuItem key={lng.code}>
                      <Button
                        className={cn(
                          "flex items-center space-x-2 px-4 py-2 text-sm cursor-pointer w-full",
                          {
                            "bg-[#F4F6F8]": i18n.language === lng.code,
                          }
                        )}
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
          <MenuIcon fill={isScrolled ? "#000" : "#fff"} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
