import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex h-full w-full overflow-hidden transition-colors z-0">
      <div className="flex flex-grow flex-col overflow-hidden">
        <Header
          isScrolled={isScrolled}
          onMenuClick={() => setSidebarOpen(!isSidebarOpen)}
        />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onMenuClick={() => setSidebarOpen(false)}
        />
        <main className="h-full w-full overflow-x-auto flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
