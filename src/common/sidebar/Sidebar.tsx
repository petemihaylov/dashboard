import React from "react";
import cn from "classnames";
import { Globe } from "lucide-react";
import { Button } from "../../components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/DropdownMenu";
import MenuIcon from "../../assets/svgs/MenuIcon";

type Props = {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
};

const Sidebar = ({ onMenuClick, isSidebarOpen }: Props) => (
  <div
    className={cn(
      "md:hidden fixed inset-y-0 right-0 z-20 w-full sm:w-[32rem] bg-black shadow-lg transition-transform duration-300",
      {
        "translate-x-full": !isSidebarOpen,
        "translate-x-0": isSidebarOpen,
      }
    )}
  >
    <button
      type="button"
      className="absolute right-4 top-5"
      onClick={onMenuClick}
    >
      <MenuIcon fill="#fff" />
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

export default Sidebar;
