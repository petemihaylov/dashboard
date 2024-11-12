import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Globe, Menu } from 'lucide-react';

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
      <a className="flex items-center justify-center" href="#">
        <WaveIcon className="h-6 w-6" />
        <span className="ml-2 font-bold">Diving Center Arapya</span>
      </a>
      <nav className="hidden md:flex ml-auto gap-8">
        <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">
          Services
        </a>
        <a className="text-sm font-medium hover:text-primary transition-colors" href="#gallery">
          Gallery
        </a>
        <a className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">
          Testimonials
        </a>
        <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
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

const WaveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </svg>
);
