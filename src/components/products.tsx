import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay },
  viewport: { once: true },
});

const products = [
  {
    key: "oil",
    image: "/products/oil.png",
    titleColor: "text-green-900",
    badgeColor: "text-green-700",
    badgeBg: "bg-green-50",
    delay: 0,
    hoverRotate: 1.5,
    hoverScale: 1.08,
  },
  {
    key: "sugar",
    image: "/products/sugar.png",
    titleColor: "text-red-800",
    badgeColor: "text-red-700",
    badgeBg: "bg-red-50",
    delay: 0.15,
    hoverRotate: -2,
    hoverScale: 1.08,
  },
  {
    key: "tuna",
    image: "/products/tuna.png",
    titleColor: "text-blue-900",
    badgeColor: "text-blue-800",
    badgeBg: "bg-blue-50",
    delay: 0.3,
    hoverRotate: 1,
    hoverScale: 1.1,
  },
  {
    key: "flour",
    image: "/products/flour.png",
    titleColor: "text-yellow-900",
    badgeColor: "text-yellow-700",
    badgeBg: "bg-yellow-50",
    delay: 0.45,
    hoverRotate: -1.5,
    hoverScale: 1.08,
  },
];

const Products = () => {
  const { t } = useTranslation();

  return (
    <section id="products" className="relative w-full py-32 bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-green-900">
        {t("products.title")}
      </h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-1 bg-[#BC2417] mx-auto mt-4 mb-20 rounded-full"
      />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.key}
            {...fadeUp(product.delay)}
            className="bg-white/90 p-10 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_45px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500 group"
          >
            <motion.img
              src={product.image}
              alt={t(`products.${product.key}.title`)}
              whileHover={{
                scale: product.hoverScale,
                rotate: product.hoverRotate,
              }}
              transition={{ type: "spring", stiffness: 140 }}
              className="w-44 mx-auto mb-6 drop-shadow-xl group-hover:drop-shadow-2xl transition"
            />

            <h3
              className={`text-center text-2xl font-bold ${product.titleColor}`}
            >
              {t(`products.${product.key}.title`)}
            </h3>

            <p className="text-center text-gray-600 mt-3">
              {t(`products.${product.key}.description`)}
            </p>

            <div
              className={`flex justify-center mt-6 gap-3 text-sm font-bold ${product.badgeColor}`}
            >
              <span className={`px-3 py-1 rounded-full ${product.badgeBg}`}>
                {t(`products.${product.key}.badge_1`)}
              </span>

              <span className={`px-3 py-1 rounded-full ${product.badgeBg}`}>
                {t(`products.${product.key}.badge_2`)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
