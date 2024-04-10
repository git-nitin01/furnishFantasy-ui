import CategoriesSection from "./components/CategoriesSection";
import FAQs from "./components/FAQs";
import FeaturedSection from "./components/FetauredSection";
import Hero from "./components/Hero";
import NewsletterSignup from "./components/NewsletterSignup";
import SpecialOffers from "./components/SpecialOffer";

const Home = ({ categories, clearance }) => {

  return (
    <main className="text-[black]">
        <Hero />
        <div className="p-8"><CategoriesSection categories={categories} /></div>
        <div className="p-8"><FeaturedSection clearance={clearance} /></div>
        <div className="p-8"><SpecialOffers /></div>
        <div className="p-8"><FAQs /></div>
        <NewsletterSignup />
      </main> 
  );
};

export default Home;
