import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay },
  viewport: { once: true },
});

const Products = () => {
  return (
    <section id="products" className="relative w-full py-32 bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-green-900">
        منتجاتنا الرئيسية
      </h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-1 bg-orange-500 mx-auto mt-4 mb-20 rounded-full"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* CARD 1 */}
        <motion.div
          {...fadeUp(0)}
          className="bg-white/90 p-10 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_45px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500 group"
        >
          <motion.img
            src="/products/oil.png"
            whileHover={{ scale: 1.08, rotate: 1.5 }}
            transition={{ type: "spring", stiffness: 140 }}
            className="w-44 mx-auto mb-6 drop-shadow-xl group-hover:drop-shadow-2xl transition"
          />

          <h3 className="text-center text-2xl font-bold text-green-900">
            زيت دوار الشمس
          </h3>
          <p className="text-center text-gray-600 mt-3">
            نقاء عالٍ – جودة – طعم ممتاز
          </p>

          <div className="flex justify-center mt-6 gap-3 text-sm font-bold text-green-700">
            <span className="px-3 py-1 rounded-full bg-green-50">
              100% طبيعي
            </span>
            <span className="px-3 py-1 rounded-full bg-green-50">نقي 100%</span>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          {...fadeUp(0.15)}
          className="bg-white/90 p-10 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_45px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500 group"
        >
          <motion.img
            src="/products/sugar.png"
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ type: "spring", stiffness: 140 }}
            className="w-44 mx-auto mb-6 drop-shadow-xl group-hover:drop-shadow-2xl transition"
          />

          <h3 className="text-center text-2xl font-bold text-red-800">
            سكر أبيض نقي
          </h3>
          <p className="text-center text-gray-600 mt-3">
            بياض ناصع – ذوبان مثالي – نقاوة عالية
          </p>

          <div className="flex justify-center mt-6 gap-3 text-sm font-bold text-red-700">
            <span className="px-3 py-1 rounded-full bg-red-50">بياض فائق</span>
            <span className="px-3 py-1 rounded-full bg-red-50">
              نقاوة مضمونة
            </span>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          {...fadeUp(0.3)}
          className="bg-white/90 p-10 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_45px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500 group"
        >
          <motion.img
            src="/products/tuna.png"
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ type: "spring", stiffness: 140 }}
            className="w-44 mx-auto mb-6 drop-shadow-xl group-hover:drop-shadow-2xl transition"
          />

          <h3 className="text-center text-2xl font-bold text-blue-900">
            تونة الريان
          </h3>
          <p className="text-center text-gray-600 mt-3">
            قطع فاخرة – بروتين عالي – نكهة ممتازة
          </p>

          <div className="flex justify-center mt-6 gap-3 text-sm font-bold text-blue-800">
            <span className="px-3 py-1 rounded-full bg-blue-50">طازجة</span>
            <span className="px-3 py-1 rounded-full bg-blue-50">
              غنية بالبروتين
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
