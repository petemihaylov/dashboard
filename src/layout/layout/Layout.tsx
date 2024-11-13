import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
