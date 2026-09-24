import "./end.css";
import { useNavigate } from "react-router-dom";

const End = () => {
  const navigate = useNavigate();
  return (
    <div className="end">
      <h1 className="end-text">Thanks for visiting.</h1>
      <p>Some stories are meant to be remembered.</p>
      <p>Some are better left behind.</p>
      <h3>You made it to the end.</h3>
      <h1 className="endh1">THIRTEEN</h1>
      <button onClick={() => navigate("/home")}>Start Over</button>
    </div>
  );
};

export default End;
