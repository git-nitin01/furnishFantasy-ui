import CategoriesSection from "./components/CategoriesSection";
import FeaturedSection from "./components/FetauredSection";
import FooterSection from "./components/FooterSection";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main className="text-[black]">
      <div><Hero /></div>
      <div><FeaturedSection /></div>
      <div><CategoriesSection /></div>
      <FooterSection/>
    </main>
  );
};

export default Home;
