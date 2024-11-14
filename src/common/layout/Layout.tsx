import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
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
  }, []);

  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden transition-colors z-0">
      <Header
        scrolled={scrolled}
        onMenuClick={() => setSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onMenuClick={() => setSidebarOpen(false)}
        />
        <div className="h-full w-full flex flex-col overflow-hidden">
          <div ref={mainRef} className="flex-grow overflow-y-auto">
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
