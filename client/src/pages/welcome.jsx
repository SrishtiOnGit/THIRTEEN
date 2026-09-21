import himg from "../assets/image.png";
import halloween from "../assets/halloween-g.jpg";
import "./welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const Navigate = useNavigate();
  return (
    <div className="welcome">
      <img src={himg} alt="IMG" className="himg" />
      <img src={halloween} alt="HIMG" className="halloweenimg" />
      <h1>THE THIRTEEN</h1>
      <p className="p1">Some flames are better left unlit.</p>
      <button className="button-h" onClick={() => Navigate("/prerequisites")}>
        Begin
      </button>
    </div>
  );
};

export default Welcome;
