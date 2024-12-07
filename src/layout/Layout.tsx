import { useEffect, useState } from "react";
import cn from "classnames";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollToTopButton from "../components/buttons/ScrollToTopButton";
import {
  LayoutRefProvider,
  useLayoutContext,
} from "./context/LayoutRefProvider";

interface Props {
  scrollable?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const LayoutContent = ({ children, scrollable }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const { ref } = useLayoutContext();

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
        scrollable={scrollable}
        scrolled={scrolled}
        onMenuClick={() => setSidebarOpen(!isSidebarOpen)}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onMenuClick={() => setSidebarOpen(false)}
      />
      <main className={cn("flex flex-col flex-grow", !scrollable && "mt-16")}>
        {children}
      </main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

const Layout = (props: Props) => (
  <LayoutRefProvider>
    <LayoutContent {...props} />
  </LayoutRefProvider>
);

export default Layout;
