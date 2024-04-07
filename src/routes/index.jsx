import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/layout";
import { Suspense, lazy, useEffect } from "react";
import Spinner from "../pages/Products/components/Spinner";
import { useState } from "react";
import { CartProvider } from "../Context/cartContext";
import CheckoutPage from "../pages/Checkout";
import PrivateLayout from "../components/PrivateLayout";

const ProductPage = lazy(() => import("../pages/Products"));
const Home = lazy(() => import("../pages/Home"));
const AdminCategoryPage = lazy(() => import("../pages/Admin"))

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timeout);
  }, []);

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
                <Home />
              </Layout>
            </Suspense>
          )
        }
      />
      <Route
        path="/gallery"
        element={
          isLoading ? (
            <Spinner />
          ) : (
            <Suspense fallback={<Spinner />}>
              <Layout>
                <ProductPage />
              </Layout>
            </Suspense>
          )
        }
      />
      <Route
        path="/checkout"
        element={
          <Layout>
            {isLoading ? (
              <Spinner />
            ) : (
              <Suspense fallback={<Spinner />}>
                <CheckoutPage />
              </Suspense>
            )}
          </Layout>
        }
      />
    
      <Route
        path="/admin/categoryPage"
        element={
          <PrivateLayout>
            {isLoading ? (
              <Spinner />
            ) : (
              <Suspense fallback={<Spinner />}>
                <AdminCategoryPage />
              </Suspense>
            )}
          </PrivateLayout>
        }
      />
        {/* <Route path="/categories" component={CategoryPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/orders" component={OrderPage} /> */}
     
   
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
