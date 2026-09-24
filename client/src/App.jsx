import "./App.css";
import PreRequisites from "./pages/prerequisites.jsx";
import Welcome from "./pages/welcome.jsx";
import Home from "./pages/home.jsx";
import { Routes, Route } from "react-router-dom";
import Part2 from "./pages/part2.jsx";

const HomePage = () => {
  return (
    <div>
      <Welcome />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prerequisites" element={<PreRequisites />} />
      <Route path="/home" element={<Home />} />
      <Route path="/part2" element={<Part2 />} />
    </Routes>
  );
};

export default App;
