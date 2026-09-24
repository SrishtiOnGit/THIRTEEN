import "./end.css";
import { useNavigate } from "react-router-dom";
import clickSound from "../assets/ClickSound.mp3";

const End = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    const audio = new Audio(clickSound);
    audio.play();

    navigate("/home");
  };
  return (
    <div className="end">
      <h1 className="end-text">Thanks for visiting.</h1>
      <p>Some stories are meant to be remembered.</p>
      <p>Some are better left behind.</p>
      <h3>You made it to the end.</h3>
      <h1 className="endh1">THIRTEEN</h1>
      <button onClick={handleContinue}>Start Over</button>
    </div>
  );
};

export default End;
