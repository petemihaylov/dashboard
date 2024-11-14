import React, { useCallback } from "react";
import cn from "classnames";
import { LanguagesIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/DropdownMenu";
import { Button } from "../../components/Button";
import { i18n, languages } from "../../i18n/i18n";
import config from "../../config/config";
import MenuIcon from "../../assets/svgs/MenuIcon";

interface Props {
  isScrolled: boolean;
  onMenuClick: () => void;
}

const Header = ({ isScrolled, onMenuClick }: Props) => {
  const navigate = useNavigate();

  const changeLanguage = useCallback((language: string) => {
    i18n.changeLanguage(language);
  }, []);

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
          {["Services", "Gallery", "Testimonials", "Contact"].map((item) => (
            <button
              key={item}
              type="button"
              className={cn("text-sm font-medium", {
                "text-gray-800 hover:text-black": isScrolled,
                "text-gray-300 hover:text-white": !isScrolled,
              })}
              onClick={() => navigate(`#${item.toLowerCase()}`)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 ml-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn({
                  "text-gray-800 hover:text-black": isScrolled,
                  "text-gray-300 hover:text-white": !isScrolled,
                })}
              >
                <LanguagesIcon className="h-6 w-6" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="border-none bg-black hover:text-white"
            >
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  className={cn("text-gray-300", {
                    "bg-gray-600": i18n.language === language.code,
                  })}
                  onClick={() => changeLanguage(language.code)}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          type="button"
          className="md:hidden absolute right-4 top-5"
          onClick={onMenuClick}
        >
          <MenuIcon fill="#fff" />
        </button>
      </div>
    </header>
  );
};

export default Header;
