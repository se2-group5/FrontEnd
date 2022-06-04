import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
