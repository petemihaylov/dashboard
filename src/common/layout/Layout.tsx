import React, { useEffect, useState, useRef } from "react";
import cn from "classnames";
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

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setScrolled(ref.current.scrollTop > 0);
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col w-full h-screen overflow-auto"
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
      <main className={cn("flex flex-col flex-grow", transparent && "mt-16")}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
