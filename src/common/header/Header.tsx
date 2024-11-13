import React from "react";
import cn from "classnames";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/DropdownMenu";
import { Button } from "../../components/Button";

interface Props {
  isScrolled: boolean;
  onMenuClick: () => void;
}

const Header = ({ isScrolled, onMenuClick }: Props) => (
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
        <span
          className={cn("font-bold", {
            "text-black": isScrolled,
            "text-white": !isScrolled,
          })}
        >
          Diving Center Arapya
        </span>
      </div>

      <nav
        className={cn("hidden md:flex ml-auto gap-8", {
          "text-black": isScrolled,
          "text-white": !isScrolled,
        })}
      >
        <a className="text-sm font-medium hover:text-primary" href="#services">
          Services
        </a>
        <a className="text-sm font-medium hover:text-primary" href="#gallery">
          Gallery
        </a>
        <a
          className="text-sm font-medium hover:text-primary"
          href="#testimonials"
        >
          Testimonials
        </a>
        <a className="text-sm font-medium hover:text-primary" href="#contact">
          Contact
        </a>
      </nav>

      <div className="hidden md:flex items-center gap-4 ml-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe
                className={cn("h-4 w-4", {
                  "text-black": isScrolled,
                  "text-white": !isScrolled,
                })}
              />
              <span className="sr-only">Toggle language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Български</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <button
        type="button"
        className="md:hidden absolute right-4 top-5"
        onClick={onMenuClick}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-xl-heavy"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
            fill="#FFF"
          />
        </svg>
      </button>
    </div>
  </header>
);

export default Header;
