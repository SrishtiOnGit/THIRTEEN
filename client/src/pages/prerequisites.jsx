import "./prerequisites.css";
import { useNavigate } from "react-router-dom";

const PreRequisites = () => {
  const navigate = useNavigate();
  return (
    <div className="prerequisites">
      <h1>BEFORE YOU BEGIN</h1>
      <ul>
        <li>Sit relaxed.</li>
        <li>Best experienced in a dark room</li>
        <li>Use a mouse for the full experience</li>
        <li>Take your time. Don't skip ahead.</li>
      </ul>
      <button onClick={() => navigate("/home")}>Let's Begin</button>
      <h6>Note : Don't take a step back once you enter.</h6>
    </div>
  );
};

export default PreRequisites;
