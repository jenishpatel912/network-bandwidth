import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./Dashboard/Dashboard";
function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
