import React, { Fragment } from "react";
import cn from "classnames";
import { VscGlobe } from "react-icons/vsc";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/icons/MenuIcon";
import { languages } from "../../i18n/i18n";

type Props = {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
};

const Sidebar = ({ onMenuClick, isSidebarOpen }: Props) => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const items = [
    { name: "header.services", link: "#services" },
    { name: "header.gallery", link: "#gallery" },
    { name: "header.testimonials", link: "#testimonials" },
    { name: "header.contacts", link: "#contact" },
  ];

  const selected = languages.find((lng) => lng.code === i18n.language);

  return (
    <div
      className={cn(
        "md:hidden fixed inset-y-0 right-0 z-20 w-full sm:w-[32rem] bg-black shadow-lg transition-transform duration-300 py-10",
        {
          "translate-x-full": !isSidebarOpen,
          "translate-x-0": isSidebarOpen,
        }
      )}
    >
      <Button className="absolute right-4 top-5" onClick={onMenuClick}>
        <MenuIcon fill="#fff" />
      </Button>

      <nav className="flex flex-col justify-start px-6 py-4">
        {items.map((item) => (
          <Button
            key={item.name}
            className="text-sm font-medium text-white w-full py-2 px-4 text-left"
            onClick={() => {
              onMenuClick();
              navigate(item.link);
            }}
          >
            {t(item.name)}
          </Button>
        ))}

        <Menu
          as="div"
          className="px-3 pl-0 relative flex"
          aria-label="usermenu"
        >
          <MenuButton
            className="group w-full  text-sm text-left font-medium text-gray-700 focus:outline-none"
            aria-label="usermenu-button"
          >
            <span className="flex w-full py-2 px-4 flex-row justify-between items-center">
              <VscGlobe className="h-5 w-5 cursor-pointer text-gray-300 hover:text-white" />
              <span className="text-gray-300 hover:text-white">
                {selected?.name}
              </span>
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
              className="z-10 mx-3 origin-top absolute top-[45px] right-0 w-full mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div className="px-1 py-1 " aria-label="menu-items">
                {languages.map((lng) => (
                  <MenuItem key={lng.code}>
                    <Button
                      className={cn(
                        "flex items-center space-x-2 px-4 py-2 text-sm cursor-pointer w-full",
                        {
                          "bg-[#F4F6F8]": selected?.code === lng.code,
                        }
                      )}
                      onClick={() => i18n.changeLanguage(lng.code)}
                      disabled={selected?.code === lng.code}
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
      </nav>
    </div>
  );
};

export default Sidebar;
