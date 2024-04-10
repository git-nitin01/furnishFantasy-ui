import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/layout";
import { useContext, useEffect, useRef, useState} from "react";
import { CartProvider } from "../Context/cartContext";
import CheckoutPage from "../pages/Checkout";
import PrivateLayout from "../components/PrivateLayout";

const ProductPage = lazy(() => import("../pages/Products"));
const Home = lazy(() => import("../pages/Home"));
const AdminCategoryPage = lazy(() => import("../pages/Admin/CategoryPage"))

  const AppRoutes = () => {
    const {data} = useContext(DataContext);
    
    const wait = useRef(true);
    const dataRef = useRef();

    useEffect(() => {
      if(data.products.length > 0 && data.categories.length > 0 && data.clearance.length > 0){
        console.log("Data fetched");
        dataRef.current = data;
        wait.current = false;
      }
    }, [data]);

  console.log("Inside Routes");
  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoading ? (
            <Spinner />
          ) : (
            <Suspense fallback={<Spinner />}>
              <Layout>
                <Home categories={dataRef.categories} clearance={dataRef.clearance}/>
              </Layout>
            }
          />
            <Route
            path="/gallery"
            element={
              <Layout>
                <ProductPage products={dataRef.products}/>
              </Layout>
            }
          />
          
            {/* Add other routes as needed */}
          </Routes>
        )
    );
  };
  const AppRouter = () => {
    return (
      <Router>
        <AppRoutes />
      </Router>
    </CartProvider>
  );
};
export default AppRouter;
