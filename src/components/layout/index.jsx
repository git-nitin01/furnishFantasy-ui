import FooterSection from "../../pages/Home/components/FooterSection";
import Header from "../common/Header";


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mt-6">{children}</main>
      <FooterSection />
    </div>
  );
};

export default Layout;