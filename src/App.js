import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Establisments from "./Pages/Establishments/Establisments";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route extct path="/establishments" element={<Establisments />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
