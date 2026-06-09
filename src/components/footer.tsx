import { Mail, Phone, MapPin, Facebook, Globe, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d1f14] text-white pt-20 pb-10 mt-32">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <img src="/meta/logo.png" className="w-40 opacity-90" />
        </div>

        <div className="flex flex-col gap-3 text-gray-300 text-lg">
          <a href="#hero" className="hover:text-[#BC2417] transition">
            الرئيسية
          </a>
          <a href="#about" className="hover:text-[#BC2417] transition">
            من نحن
          </a>
          <a href="#products" className="hover:text-[#BC2417] transition">
            منتجاتنا
          </a>
          <a href="#contact" className="hover:text-[#BC2417] transition">
            تواصل معنا
          </a>
        </div>

        <div className="flex flex-col gap-4 text-sm font-bold text-gray-200">
          <div className="flex items-center gap-3">
            <Mail className="text-[#BC2417] w-5 h-5" />
            info@arryanalraqi.com.ly
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-[#BC2417] w-5 h-5" />
            <span dir="ltr">+218 91 218 6060</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-[#BC2417] w-5 h-5" />
            كرزاز - مصراتة - ليبيا
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="font-bold text-lg">تابعنا</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/61572927488847"
              className="p-3 bg-white/10 rounded-full hover:bg-[#BC2417] transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/arrayan-alraqi"
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
        © 2025 الريان الراقي. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
