import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard/Dashboard";
import GenerateProxy from "./GenerateProxy/GenerateProxy";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/proxy" element={<GenerateProxy />} />
            {/* <Route path="/settings" element={<Settings />} />
            <Route path="/billing" element={<Billing />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
