import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface Props {
  transparent?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children, transparent = false }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setScrolled(ref.current.scrollTop > 0);
      }
    };

    const mainElement = ref.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref]);

  return (
    <div className="relative flex flex-col w-full h-screen">
      <Header
        transparent={transparent}
        scrolled={scrolled}
        onMenuClick={() => setSidebarOpen(!isSidebarOpen)}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onMenuClick={() => setSidebarOpen(false)}
      />
      <div ref={ref} className="flex-grow overflow-y-auto">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
