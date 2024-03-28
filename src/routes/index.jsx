import {
    Route,
    BrowserRouter as Router,
    Routes,
  } from "react-router-dom";
  import Home from "../pages/Home";
  import Layout from "../components/layout";
import { Suspense, lazy, useEffect } from "react";
import Spinner from "../pages/Products/components/Spinner";
import { useState } from "react";

  const ProductPage = lazy(() => import("../pages/Products"));

  const AppRoutes = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2400);

      return () => clearTimeout(timeout);
    }, []);

    console.log("Inside Routes");
    // put the logic for authenticated here
    const isAuthenticated = true;
    return (
      <Routes>
           <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
        <Route
        path="/gallery"
        element={
          <Layout>
            {isLoading ? <Spinner /> : <Suspense fallback={<Spinner/>}>
              <ProductPage />
            </Suspense> }
          </Layout>
        }
      />
        {/* Add other routes as needed */}
      </Routes>
    );
  };
  const AppRouter = () => {
    return (
      <Router>
        <AppRoutes />
      </Router>
    );
  };
  export default AppRouter;