import himg from "../assets/image.png";
import halloween from "../assets/halloween.jpg";
import clickSound from "../assets/ClickSound.mp3";

import "./welcome.css";

import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    const audio = new Audio(clickSound);
    audio.play();

    navigate("/prerequisites");
  };

  return (
    <div className="welcome">
      <img src={himg} alt="IMG" className="himg" />
      <img src={halloween} alt="HIMG" className="halloweenimg" />

      <h1>THE THIRTEEN</h1>

      <p className="p1">Some flames are better left unlit.</p>

      <button className="button-h" onClick={handleContinue}>
        Begin
      </button>
    </div>
  );
};

export default Welcome;
