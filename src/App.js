import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./Layout";
import { privateRoutes, publicRoutes } from "./routes";
import { UserProvider } from "./UserContext";

function App() {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const currentRoutes = userInfo ? privateRoutes : publicRoutes;

  

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="flex min-h-screen bg-gray-100">
        <UserProvider>
          <BrowserRouter>
            <Routes>
              {currentRoutes.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={
                    route.redirectRoute ? (
                      <Navigate to={route.navigation} />
                    ) : (
                      <Layout>
                        <route.component />
                      </Layout>
                    )
                  }
                />
              ))}
              {/* <Route element={<RegistrationForm />} path="/register" />
            <Route element={<Dashboard />} path="/home" />
            <Route path="*" element={<Navigate to="home" />} /> */}
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
