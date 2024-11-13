import React from 'react';
import { Globe, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

type HeaderProps = {
  isScrolled: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => (
  <header
    className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}
  >
    <div className="container mx-auto px-4 h-16 flex items-center">
      <span className="ml-2 font-bold">Diving Center Arapya</span>
      <nav className="hidden md:flex ml-auto gap-8">
        <a className="text-sm font-medium hover:text-primary" href="#services">
          Services
        </a>
        <a
          className="text-sm font-medium hover:text-primary transition-colors"
          href="#gallery"
        >
          Gallery
        </a>
        <a
          className="text-sm font-medium hover:text-primary transition-colors"
          href="#testimonials"
        >
          Testimonials
        </a>
        <a
          className="text-sm font-medium hover:text-primary transition-colors"
          href="#contact"
        >
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-4 ml-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Български</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </header>
);
