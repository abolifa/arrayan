import { motion } from "framer-motion";
import { Leaf, Wheat } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen md:h-screen overflow-hidden flex items-center justify-center bg-linear-to-b from-white to-orange-50 py-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -80, y: -80 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute w-[550px] h-[550px] bg-orange-500/25 blur-[160px] rounded-full -top-20 -left-32"
      />
      <motion.div
        initial={{ opacity: 0, x: 80, y: 80 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute w-[650px] h-[650px] bg-green-800/25 blur-[180px] rounded-full bottom-0 -right-32"
      />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="text-center max-w-2xl flex flex-col items-center justify-center">
          <motion.img
            src="/meta/logo.png"
            className="w-64 drop-shadow-2xl"
            alt="logo"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl leading-relaxed font-black tracking-tight text-green-900 mt-6"
          >
            شركة الريان الراقي
            <span className="block text-[#BC2417] text-base md:text-2xl">
              لاستيراد المواد الغذائية والسلع التموينية
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-gray-800 text-xl leading-relaxed"
          >
            توريد وتوزيع غذائي بمعايير عالية، جودة موثقة وثقة عملية مستمرة لخدمة
            السوق الليبي بكل كفاءة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 flex justify-center md:justify-start gap-6"
          >
            <a
              href="#products"
              className="px-10 z-50 py-4 bg-[#BC2417] hover:bg-[#A31F16] text-white text-xl font-bold rounded-full transition"
            >
              عرض المنتجات
            </a>
            <a
              href="#contact"
              className="px-10 z-50 py-4 border-2 border-green-800 text-green-900 hover:bg-green-800 hover:text-white text-xl font-bold rounded-full transition"
            >
              تواصل معنا
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center mt-10 md:mt-0"
        >
          <img
            src="/products/oil.png"
            className="w-[350px] md:w-[420px] drop-shadow-2xl -rotate-10"
            alt="product"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -15 }}
            whileInView={{ opacity: 0.5, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute -left-16 top-6 text-green-700/80"
          >
            <Leaf size={60} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 15 }}
            whileInView={{ opacity: 0.7, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="absolute -right-14 top-10 text-orange-700/80"
          >
            <Wheat size={58} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="absolute right-1/2 translate-x-1/2 -bottom-14 text-green-800/70 rotate-180"
          >
            <Leaf size={52} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
