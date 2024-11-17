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
  const mainRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        setScrolled(mainRef.current.scrollTop > 0);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [mainRef]);

  // TODO: Check which is the overflowing layout.
  return (
    <div
      ref={mainRef}
      className="relative flex flex-col w-full h-screen transition-colors z-0"
    >
      <Header
        transparent={transparent}
        scrolled={scrolled}
        onMenuClick={() => setSidebarOpen(!isSidebarOpen)}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onMenuClick={() => setSidebarOpen(false)}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
