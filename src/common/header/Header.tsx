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
  transparent: boolean;
  scrolled: boolean;
  onMenuClick: () => void;
}

const Header = ({
  onMenuClick,
  transparent = false,
  scrolled = false,
}: Props) => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const items = [
    { name: "header.services", link: "#services" },
    { name: "header.gallery", link: "#gallery" },
    { name: "header.testimonials", link: "#testimonials" },
    { name: "header.contacts", link: "/contacts" },
  ];

  // Determine the appropriate text color and image source
  const textColorClass = transparent
    ? "text-gray-600 hover:text-black"
    : scrolled
      ? "text-gray-600 hover:text-black"
      : "text-gray-300 hover:text-white";

  const iconSrc = transparent
    ? config.app.icon.light
    : scrolled
      ? config.app.icon.light
      : config.app.icon.dark;

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        "fixed top-0 w-full z-10 transition-all duration-300 flex justify-center",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="flex flex-row md:container w-full justify-between pr-[6rem] px-4 h-16 items-center">
        <div className="flex items-center">
          <button type="button" onClick={() => navigate("/")}>
            <img
              src={iconSrc}
              alt={config.app.name}
              className="h-[1.5rem] w-[1.5rem]"
            />
          </button>
        </div>

        <nav className="hidden md:flex ml-auto gap-8">
          {items.map((item) => (
            <Button
              key={item.name}
              className={cn("text-sm font-medium", textColorClass)}
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
              className={cn(
                "group w-full text-sm text-left font-medium focus:outline-none",
                textColorClass
              )}
              aria-label="usermenu-button"
            >
              <span className="flex w-full justify-between items-center">
                <VscGlobe
                  className={cn("h-5 w-5 cursor-pointer", textColorClass)}
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
                        className={cn(
                          "flex items-center space-x-2 px-4 py-2 text-sm cursor-pointer w-full",
                          i18n.language === lng.code ? "bg-[#F4F6F8]" : ""
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
          <MenuIcon fill={transparent ? "#000" : "#fff"} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
