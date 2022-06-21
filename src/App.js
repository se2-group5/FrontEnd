import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Establishments from "./Pages/Establishments/Establishments";
import Establishment from "./Pages/Establishment/Establishment";
import Report from "./Pages/Establishment/Report/Report";
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
          <Route extct path="/establishments" element={<Establishments />} />
          <Route exact path="/establishment/:name" element={<Establishment />}>
            <Route exact path="report" element={<Report />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
