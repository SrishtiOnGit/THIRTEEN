import "./prerequisites.css";
import { useNavigate } from "react-router-dom";
import clickSound from "../assets/ClickSound.mp3";

const PreRequisites = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    const audio = new Audio(clickSound);
    audio.play();

    navigate("/home");
  };
  return (
    <div className="prerequisites">
      <h1>BEFORE YOU BEGIN</h1>
      <ul>
        <li>Use your Headphones.</li>
        <li>Keep your sound on.</li>
        <li>Best experienced in a dark room</li>
        <li>Use a mouse for the full experience</li>
        <li>Take your time. Don't skip ahead.</li>
      </ul>
      <button onClick={handleContinue}>Let's Begin</button>
      <h6>Note : Don't take a step back once you enter.</h6>
    </div>
  );
};

export default PreRequisites;
