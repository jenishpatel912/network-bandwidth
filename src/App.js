import Layout from "./Layout";
import Dashboard from "./Dashboard/Dashboard";
import GenerateProxy from "./GenerateProxy/GenerateProxy";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";

import "./App.css";
import RegistrationForm from "./User/CreateUser";
import { privateRoutes, publicRoutes } from "./routes";

function App() {
  let userInfo = JSON.parse(localStorage.getItem('userInfo'));
  console.log(userInfo)

  const currentRoutes = userInfo ? privateRoutes : publicRoutes
  return (
    <div className="flex min-h-screen bg-gray-100">
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
                  <Layout><route.component /></Layout>
                )
              }
            />
          ))}
            {/* <Route element={<RegistrationForm />} path="/register" />
            <Route element={<Dashboard />} path="/home" />
            <Route path="*" element={<Navigate to="home" />} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
