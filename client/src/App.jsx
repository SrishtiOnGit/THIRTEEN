import "./App.css";
import PreRequisites from "./pages/prerequisites.jsx";
import Welcome from "./pages/welcome.jsx";
import { Routes, Route } from "react-router-dom";

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
    </Routes>
  );
};

export default App;
