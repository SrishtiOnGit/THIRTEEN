import "./App.css";
import PreRequisites from "./pages/prerequisites.jsx";
import Welcome from "./pages/welcome.jsx";
import Home from "./pages/home.jsx";
import { Routes, Route } from "react-router-dom";
import Part2 from "./pages/part2.jsx";
import Part3 from "./pages/part3.jsx";
import Part4 from "./pages/part4.jsx";
import Part5 from "./pages/part5.jsx";
import Part6 from "./pages/part6.jsx";
import Part7 from "./pages/part7.jsx";
import Part8 from "./pages/part8.jsx";
import Part9 from "./pages/part9.jsx";
import Part10 from "./pages/part10.jsx";
import Part11 from "./pages/part11.jsx";
import Part12 from "./pages/part12.jsx";
import Part13 from "./pages/part13.jsx";
import End from "./pages/end.jsx";

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
      <Route path="/part3" element={<Part3 />} />
      <Route path="/part4" element={<Part4 />} />
      <Route path="/part5" element={<Part5 />} />
      <Route path="/part6" element={<Part6 />} />
      <Route path="/part7" element={<Part7 />} />
      <Route path="/part8" element={<Part8 />} />
      <Route path="/part9" element={<Part9 />} />
      <Route path="/part10" element={<Part10 />} />
      <Route path="/part11" element={<Part11 />} />
      <Route path="/part12" element={<Part12 />} />
      <Route path="/part13" element={<Part13 />} />
      <Route path="/end" element={<End />} />
    </Routes>
  );
};

export default App;
