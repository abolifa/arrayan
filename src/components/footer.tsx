import { Mail, Phone, MapPin, Facebook, Globe, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { href: "#hero", label: t("footer.links.home") },
    { href: "#about", label: t("footer.links.about") },
    { href: "#products", label: t("footer.links.products") },
    { href: "#contact", label: t("footer.links.contact") },
  ];

  return (
    <footer className="w-full bg-[#0d1f14] text-white pt-20 pb-10 mt-32">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <img src="/meta/logo.png" className="w-40 opacity-90" alt="logo" />
        </div>

        <div className="flex flex-col gap-3 text-gray-300 text-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#BC2417] transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4 text-sm font-bold text-gray-200">
          <div className="flex items-center gap-3">
            <Mail className="text-[#BC2417] w-5 h-5" />
            {t("footer.email")}
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-[#BC2417] w-5 h-5" />
            <span dir="ltr">{t("footer.phone")}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-[#BC2417] w-5 h-5" />
            {t("footer.address")}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="font-bold text-lg">{t("footer.follow_us")}</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/61572927488847"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-[#BC2417] transition"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/company/arrayan-alraqi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-[#BC2417] transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-[#BC2417] transition"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-16">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
