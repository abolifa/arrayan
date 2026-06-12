import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Wheat } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const backgrounds = [
    {
      type: "video",
      src: "/videos/2.mp4",
      duration: 8000,
    },
    {
      type: "image",
      src: "/1.jpg",
      duration: 3000,
    },
    {
      type: "video",
      src: "/videos/1.mp4",
      duration: 8000,
    },
  ];

  const { t } = useTranslation();

  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, backgrounds[currentBackground].duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen md:h-screen overflow-hidden flex items-center justify-center bg-black py-32"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBackground}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {backgrounds[currentBackground].type === "video" ? (
            <video
              src={backgrounds[currentBackground].src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={backgrounds[currentBackground].src}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 2 }}
        className="absolute z-20 w-[550px] h-[550px] bg-orange-500/25 blur-[160px] rounded-full -top-20 -left-32"
      />

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 2.2 }}
        className="absolute z-20 w-[650px] h-[650px] bg-green-800/25 blur-[180px] rounded-full bottom-0 -right-32"
      />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
        className="relative z-20 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12"
      >
        <div className="text-center max-w-2xl flex flex-col items-center justify-center">
          <motion.img
            src="/meta/logo.png"
            className="w-32 md:w-64 drop-shadow-2xl"
            alt="logo"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.35 }}
            className="text-xl md:text-4xl leading-relaxed font-black tracking-tight text-white mt-6"
          >
            {t("hero.title")}
            <span className="block text-[#FFD35A] text-sm md:text-2xl">
              {t("hero.slogan")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-6 text-white/90 text-sm md:text-base leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.7 }}
            className="mt-8 flex flex-col md:flex-row justify-center md:justify-start gap-6"
          >
            <a
              href="#products"
              className="px-10 z-50 py-4 bg-[#BC2417] hover:bg-[#A31F16] text-white text-sm md:text-base font-bold rounded-full transition"
            >
              {t("hero.view_products")}
            </a>
            <a
              href="#contact"
              className="px-10 z-50 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 text-sm md:text-base font-bold rounded-full transition"
            >
              {t("hero.contact")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 2.4 }}
          className="relative hidden md:flex justify-center mt-10 md:mt-0"
        >
          <img
            src="/products/profile.png"
            className="drop-shadow-2xl max-h-[620px]"
            alt="product"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -15 }}
            animate={{ opacity: 0.5, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 2.7 }}
            className="absolute -left-16 top-6 text-green-300/80"
          >
            <Leaf size={60} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 15 }}
            animate={{ opacity: 0.7, y: 0, rotate: 0 }}
            transition={{ duration: 1.1, delay: 2.8 }}
            className="absolute -right-14 top-10 text-orange-300/80"
          >
            <Wheat size={58} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1.3, delay: 2.9 }}
            className="absolute right-1/2 translate-x-1/2 -bottom-14 text-green-300/70 rotate-180"
          >
            <Leaf size={52} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
