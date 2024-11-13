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

type Props = {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
};

const Sidebar = ({ onMenuClick, isSidebarOpen }: Props) => {
  if (!isSidebarOpen) return null;

  return (
    <div
      className={cn(
        "md:hidden fixed inset-y-0 right-0 z-20 w-full sm:w-[24rem] bg-black shadow-lg transition-transform transform"
      )}
    >
      <button
        type="button"
        className="absolute right-4 top-5"
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

      <nav className="flex flex-col px-6 py-4">
        <a className="text-white text-sm font-medium py-2" href="#services">
          Services
        </a>
        <a className="text-white text-sm font-medium py-2" href="#gallery">
          Gallery
        </a>
        <a className="text-white text-sm font-medium py-2" href="#testimonials">
          Testimonials
        </a>
        <a className="text-white text-sm font-medium py-2" href="#contact">
          Contact
        </a>

        <div className="mt-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-4 w-4 text-white" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Български</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
