import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/layout";
import { useContext, useEffect, useRef, useState} from "react";
import { CartProvider } from "../Context/cartContext";
import { DataContext } from "../Context/DataContext";
import Home from "../pages/Home";
import ProductPage from "../pages/Products";
import Spinner from "../pages/Products/components/Spinner";
import Checkout from "../pages/Checkout";
import AdminCategoryPage from "../pages/Admin/CategoryPage";
import PrivateLayout from "../components/PrivateLayout";


  const AppRoutes = () => {
    const dataRef = useRef(null);
    const {data} = useContext(DataContext);
    const [wait, setWait] = useState(true);

    console.log(dataRef.current);
    useEffect(() => {
      if(data.products.length > 0 && data.categories.length > 0 && data.clearance.length > 0){
       data.categories = data.categories.filter((category) => category?.id !== "CAT0_7")
       data.clearance = [...new Set(data.clearance.filter(obj => obj.id))];
        dataRef.current = data;
        setWait(false);
      }
    }, [data]);

    console.log("Inside Routes");
    return (
      wait ? <Spinner />:
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home products={dataRef.current.products} categories={dataRef.current.categories} clearance={dataRef.current.clearance}/>
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <ProductPage categories={dataRef.current.categories} products={dataRef.current.products}/>
            </Layout>
          }
        />
        <Route
          path="/gallery/:category"
          element={(
            <Layout>
              <ProductPage categories={dataRef.current.categories} products={dataRef.current.products}/>
            </Layout>
          )}
        />

        <Route
          path="/checkout"
          element={(
            <Layout>
              <Checkout />
            </Layout>
          )}
        />

        <Route
          path="/admin/categoryPage"
          element={(
            <PrivateLayout>
              <AdminCategoryPage />
            </PrivateLayout>
          )}
        />
        {/* Add other routes as needed */}
      </Routes>
      );
  };
  const AppRouter = () => {
    return (
    <CartProvider>
      <Router>
        <AppRoutes />
      </Router>
    </CartProvider>
  );
};
export default AppRouter;