import {
    Route,
    BrowserRouter as Router,
    Routes,
  } from "react-router-dom";
  import Home from "../pages/Home";
  import Layout from "../components/layout";
  
  
  const AppRoutes = () => {
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