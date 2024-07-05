import { FC, Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguagesBtn from "@/components/languages/button";

import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";

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
    setScrolled(latest > 50 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-lg 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-[#D4D4D4] py-3 shadow-xl text-[#764095]"
          : " py-6 shadow-none bg-[#D4D4D4]  text-[#764095]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-32 lg:flex">
        <div className=""> <LanguagesBtn /> </div>

          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }: { color?: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold w-16 h-16" style={{ color }}>
        <img src="/images/logo.png" />
      </span>
    </div>
  );
};

const Links = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3 ">
      <NavLink href="/">{t("Home")}</NavLink>
      <NavLink href="">{t("About")}</NavLink>
      <NavLink href="">{t("Portflio")}</NavLink>
      <NavLink href="/blog">{t("Blog")}</NavLink>
      <NavLink href="/contact">{t("Contact")}</NavLink>
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
        />
      </a>
    </div>
  );
};

const CTAs = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2  border-2 border-[#764095] px-4 py-2 font-semibold text-[#764095] transition-colors hover:bg-white hover:text-black">
        <span>{t("Consultation")}</span>
      </button>
      <button className=" border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-[#764095] hover:bg-[#764095] hover:text-white">
      {t("Contact")}
      </button>
    </div>
  );
};

const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ElementType;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
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
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-center bg-neutral-950 p-4">
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
