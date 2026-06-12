import { motion } from "framer-motion";
import { ShieldCheck, Boxes, CheckCircle2, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, delay },
});

const items = [
  { key: "trust", icon: ShieldCheck, delay: 0 },
  { key: "variety", icon: Boxes, delay: 0.12 },
  { key: "quality", icon: CheckCircle2, delay: 0.24 },
  { key: "storage", icon: Leaf, delay: 0.36 },
];

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <section
      id="why-us"
      className="w-full py-32 bg-linear-to-b from-white to-orange-50/10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-green-900"
      >
        {t("why_us.title")}
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-1 bg-[#BC2417] mx-auto mt-4 mb-20 rounded-full"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.key}
              {...fadeUp(item.delay)}
              className="p-10 bg-white/90 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_45px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500"
            >
              <Icon
                className="w-12 h-12 text-green-700 mx-auto mb-5"
                strokeWidth={1.6}
              />

              <h3 className="text-center text-2xl font-bold text-green-900 mb-3">
                {t(`why_us.${item.key}.title`)}
              </h3>

              <p className="text-center text-gray-600 leading-relaxed">
                {t(`why_us.${item.key}.description`)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
