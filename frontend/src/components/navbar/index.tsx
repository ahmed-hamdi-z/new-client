// Dependencies
import { FC } from "react";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";

const MainNavbar: FC = () => {
  return (
    <>
      <FlyoutNav />

   
  
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-neutral-950 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden space-x-10 gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }: { color?: string }) => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold" style={{ color }}>
        Placeholder
      </span>
     
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="flex items-center justify-center gap-2  border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black">
      
        <span>Get Consultation  </span>
      </button>
      <button className=" border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">
        Contact Us
      </button>
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6"></div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainNavbar;

const LINKS = [
  {
    text: "Home ",
    href: "#",
  },
  
  {
    text: "About Us",
    href: "#",
  },

  {
    text: "Services",
    href: "#",
  },
  {
    text: "Portfolio",
    href: "#",
  },
  {
    text: "Clients",
    href: "#",
  },
  {
    text: "Blog",
    href: "#",
  },  
  {
    text: "Contact Us ",
    href: "#",
  },  
];
