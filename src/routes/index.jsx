import {
    Route,
    BrowserRouter as Router,
    Routes,
  } from "react-router-dom";
  import Layout from "../components/layout";
import { Suspense, lazy, useEffect } from "react";
import Spinner from "../pages/Products/components/Spinner";
import { useState } from "react";
import { CartProvider } from "../Context/cartContext";

  const ProductPage = lazy(() => import("../pages/Products"));
  const Home = lazy(() => import("../pages/Home"));

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
          isLoading ? <Spinner /> : <Suspense fallback={<Spinner/>}>
              <Layout>
                <Home />
              </Layout>

            </Suspense> 
        }
      />
        <Route
        path="/gallery"
        element={
          isLoading ? <Spinner /> : <Suspense fallback={<Spinner/>}>
              <Layout>
                <ProductPage />
              </Layout>
            </Suspense> 
        }
      />
      
        {/* Add other routes as needed */}
      </Routes>
    );
  };
  const AppRouter = () => {
    return (
      <Router>
         <CartProvider>
        <AppRoutes />
      </CartProvider>
      </Router>
    );
  };
  export default AppRouter;