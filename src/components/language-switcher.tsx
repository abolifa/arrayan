import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "ar") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);

    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={() => changeLanguage(i18n.language === "ar" ? "en" : "ar")}
      className={cn(
        "flex items-center justify-center w-9 h-9 rounded-full border transition border-white text-white hover:bg-black/10",
        scrolled ? "border-gray-800 text-gray-800" : "border-white text-white",
      )}
    >
      {i18n.language === "ar" ? "EN" : "AR"}
    </button>
  );
}
