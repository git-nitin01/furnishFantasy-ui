import Sidebar from "../pages/Admin/SideBar";
import FooterSection from "../pages/Home/components/FooterSection";
import Header from "./common/Header";

const PrivateLayout = ({ children }) => {
  const isAdmin = true;
console.log("here inside header")
  return (
    <div>
      <Header />
      {isAdmin ? (
        <main className="mt-14 flex">
          <>
           <Sidebar />
            {children}
          </>
        </main>
      ) : (
        <main className="mt-14">You don't have Access to Admin Site</main>
      )}
      <FooterSection />
    </div>
  );
};

export default PrivateLayout;
