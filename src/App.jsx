import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Dashboard from "./pages/Dashboard";
import Dummy from "./Auth/Dummy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/dummy" element={<Dummy />} />
      </Routes>
    </>
  );
}

export default App;
