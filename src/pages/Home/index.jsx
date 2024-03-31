import CategoriesSection from "./components/CategoriesSection";
import FeaturedSection from "./components/FetauredSection";
import FooterSection from "./components/FooterSection";
import Hero from "./components/Hero";
import SpecialOffers from "./components/SpecialOffer";

const Home = () => {
  return (
    <main className="text-[black]">
      <Hero />
      <div className="p-8"><FeaturedSection /></div>
      <div className="p-8"><CategoriesSection /></div>
      <div className="p-8"><SpecialOffers /></div>
      <div ><FooterSection/></div>
    </main>
  );
};

export default Home;
