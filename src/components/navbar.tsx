import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Facebook, Mail, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./language-switcher";

const navs = [
  { key: "home", path: "#hero" },
  { key: "about", path: "#about" },
  { key: "products", path: "#products" },
  { key: "contact", path: "#contact" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleScrollOrNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    e.preventDefault();
    setOpen(false);

    const scrollToSection = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname === "/") {
      scrollToSection();
    } else {
      navigate("/");
      setTimeout(scrollToSection, 300);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-xl"
          : "bg-black/15 backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "container mx-auto px-5 xl:px-0 flex items-center justify-between transition-all duration-300",
          scrolled ? "h-20" : "h-24",
        )}
      >
        <Link
          to="/"
          className="flex items-center justify-center shrink-0"
          aria-label={t("navbar.logo_alt")}
        >
          <img
            src="/meta/logo.png"
            className={cn(
              "object-contain transition-all duration-300",
              scrolled ? "w-24 md:w-28" : "w-28 md:w-36",
            )}
            alt={t("navbar.logo_alt")}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navs.map((nav) => (
            <a
              key={nav.key}
              href={nav.path}
              onClick={(e) => handleScrollOrNavigate(e, nav.path)}
              className={cn(
                "text-base xl:text-lg font-medium transition-colors underline-offset-8 hover:underline",
                scrolled
                  ? "text-gray-900 hover:text-[#BC2417]"
                  : "text-white hover:text-[#FFD35A]",
              )}
            >
              {t(`navbar.links.${nav.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://wa.me/218912186060"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("navbar.social.whatsapp")}
            className={cn(
              "flex items-center justify-center w-9 h-9 rounded-full border transition",
              scrolled
                ? "border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                : "border-white text-white hover:bg-green-500 hover:border-green-500",
            )}
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>

          <a
            href="mailto:info@arryanalraqi.com.ly"
            aria-label={t("navbar.social.email")}
            className={cn(
              "hidden sm:flex items-center justify-center w-9 h-9 rounded-full border transition",
              scrolled
                ? "border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white"
                : "border-white text-white hover:bg-white/20",
            )}
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href="https://www.facebook.com/61572927488847"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("navbar.social.facebook")}
            className={cn(
              "hidden md:flex items-center justify-center w-9 h-9 rounded-full border transition",
              scrolled
                ? "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                : "border-white text-white hover:bg-white/20",
            )}
          >
            <Facebook className="w-4 h-4" />
          </a>

          <LanguageSwitcher scrolled={scrolled} />

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition",
              scrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/20",
            )}
            aria-label={open ? t("navbar.close_menu") : t("navbar.open_menu")}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 w-full border-t shadow-xl backdrop-blur-xl",
            scrolled
              ? "bg-white/95 border-gray-100 text-gray-900"
              : "bg-black/90 border-white/10 text-white",
          )}
        >
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navs.map((nav) => (
              <a
                key={nav.key}
                href={nav.path}
                onClick={(e) => handleScrollOrNavigate(e, nav.path)}
                className={cn(
                  "w-full rounded-xl px-4 py-3 text-lg font-medium transition",
                  scrolled
                    ? "hover:bg-gray-100 hover:text-[#BC2417]"
                    : "hover:bg-white/10 hover:text-[#FFD35A]",
                )}
              >
                {t(`navbar.links.${nav.key}`)}
              </a>
            ))}

            <div className="mt-4 flex items-center gap-3 px-4">
              <a
                href="mailto:info@arryanalraqi.com.ly"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20"
                aria-label={t("navbar.social.email")}
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/61572927488847"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20"
                aria-label={t("navbar.social.facebook")}
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
