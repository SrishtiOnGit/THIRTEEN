import { useEffect, useState } from "react";
import glass from "../assets/glass.png";
import web from "../assets/web.png";
import { useNavigate } from "react-router-dom";
import "./horror.css";

const Horror = (props) => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(props.text.slice(0, index + 1));
      index++;
      if (index >= props.text.length) {
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, [props.text]);

  return (
    <div className="horror">
      <h3>{props.label}</h3>
      <img src={glass} alt="glass" className="glass" />
      <img src={web} alt="web" className="web" />
      <div className="typewriter">
        <p className="typewrite">{displayText}</p>
      </div>
      <button onClick={() => navigate(props.nextPage)}>Next</button>
    </div>
  );
};

export default Horror;
