import { Link } from "react-router-dom";
import "./Btns.css";
function Btns({ data }) {
  return (
    <div className="btnss">
      <Link to="/contactus/submit">{data}</Link>
    </div>
  );
}

export default Btns;
