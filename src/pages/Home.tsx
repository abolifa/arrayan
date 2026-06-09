import About from "@/components/about";
import Contact from "@/components/contact";
import Gellery from "@/components/gallery";
import Hero from "@/components/hero";
import Products from "@/components/products";
import WhyUs from "@/components/whyus";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Gellery />
      <Contact />
    </>
  );
};

export default Home;
