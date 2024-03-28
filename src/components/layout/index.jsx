import Header from "../common/Header";


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mt-6">{children}</main>
    </div>
  );
};

export default Layout;