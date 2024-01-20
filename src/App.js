import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import "./index.css";
import NavbarLocal from "./components/common/navbar";

function App() {
  return (
    <div className="outfit-font black-color-website">
      <NavbarLocal />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
