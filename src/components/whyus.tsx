import { motion } from "framer-motion";
import { ShieldCheck, Boxes, CheckCircle2, Leaf } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, delay },
});

const WhyUs = () => {
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
        لماذا تختارنا؟
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-1 bg-orange-500 mx-auto mt-4 mb-20 rounded-full"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <motion.div
          {...fadeUp(0)}
          className="p-10 bg-white/90 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_45px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500"
        >
          <ShieldCheck
            className="w-12 h-12 text-green-700 mx-auto mb-5"
            strokeWidth={1.6}
          />
          <h3 className="text-center text-2xl font-bold text-green-900 mb-3">
            موثوقية مضمونة
          </h3>
          <p className="text-center text-gray-600 leading-relaxed">
            نلتزم بالجودة وسلامة المنتج من المصدر حتى التسليم.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.12)}
          className="p-10 bg-white/90 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_45px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500"
        >
          <Boxes
            className="w-12 h-12 text-green-700 mx-auto mb-5"
            strokeWidth={1.6}
          />
          <h3 className="text-center text-2xl font-bold text-green-900 mb-3">
            تنوع في المنتجات
          </h3>
          <p className="text-center text-gray-600 leading-relaxed">
            توفر في الأصناف يغطي احتياجات السوق ويضمن بدائل مستمرة.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.24)}
          className="p-10 bg-white/90 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_45px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500"
        >
          <CheckCircle2
            className="w-12 h-12 text-green-700 mx-auto mb-5"
            strokeWidth={1.6}
          />
          <h3 className="text-center text-2xl font-bold text-green-900 mb-3">
            جودة مستوردة
          </h3>
          <p className="text-center text-gray-600 leading-relaxed">
            اختيار دقيق للموردين يضمن ثبات الجودة والطعم والقيمة.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.36)}
          className="p-10 bg-white/90 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_45px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500"
        >
          <Leaf
            className="w-12 h-12 text-green-700 mx-auto mb-5"
            strokeWidth={1.6}
          />
          <h3 className="text-center text-2xl font-bold text-green-900 mb-3">
            عناية في التخزين
          </h3>
          <p className="text-center text-gray-600 leading-relaxed">
            سلسلة نقل وتخزين مدروسة للحفاظ على القيمة الغذائية.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
