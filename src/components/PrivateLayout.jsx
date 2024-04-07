import FooterSection from "../pages/Home/components/FooterSection";
import Header from "./common/Header";
import Sidebar from "./Login/Sidebar";

const PrivateLayout = ({ children }) => {
  const isAdmin = true;

  return (
    <div>
      <Header />
      {isAdmin ? (
        <main className="mt-6">
          <>
            {children}
            {/* <Sidebar /> */}
          </>
        </main>
      ) : (
        <main className="mt-6">You don't have Access to Admin Site</main>
      )}
      <FooterSection />
    </div>
  );
};

export default PrivateLayout;
