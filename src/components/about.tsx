import { motion } from "framer-motion";
import { Leaf, Wheat } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="relative w-full py-32 overflow-hidden bg-linear-to-b from-white to-orange-50/30"
    >
      <div className="absolute w-[500px] h-[500px] bg-orange-400/20 blur-[170px] rounded-full top-10 -right-40" />
      <div className="absolute w-[450px] h-[450px] bg-green-700/15 blur-[160px] rounded-full -bottom-20 -left-40" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="/about.webp"
            alt="about"
            className="w-full h-full object-cover"
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute bottom-5 right-5 bg-white/85 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg flex items-center gap-2"
          >
            <Leaf size={22} className="text-green-700" />
            <span className="font-bold text-green-800 text-sm">
              {t("about.quality")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="absolute top-5 left-5 bg-white/85 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg flex items-center gap-2"
          >
            <Wheat size={22} className="text-[#BC2417]" />
            <span className="font-bold text-[#BC2417] text-sm">
              {t("about.selected_products")}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="text-center md:text-start"
        >
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight"
          >
            {t("about.title")}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="h-1 bg-[#BC2417] mt-3 mb-8 mx-auto md:mx-0 rounded-full"
          />

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            {t("about.description_1")}
          </p>

          <p className="mt-5 text-gray-800 text-lg md:text-xl leading-relaxed">
            {t("about.description_2")}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="mt-10 flex justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="px-12 py-4 bg-[#BC2417] hover:bg-[#8C1E12] text-white font-bold text-xl rounded-full transition"
            >
              {t("about.contact")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
