import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import AddToCart from "../../pages/AddToCart";
import FooterSection from "../../pages/Home/components/FooterSection";
import Header from "../common/Header";


const Layout = ({ children }) => {
  const { open } = useContext(CartContext);

  return (
    <div>
      <Header />
      <main className="mt-6">{children}{open && <AddToCart />}</main>
      <FooterSection />
    </div>
  );
};

export default Layout;