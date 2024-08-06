import { Link } from "react-router-dom";
import "./TalkToUs.css";
import OBJECTS from "../../assets/OBJECTS.png";
import TalkTOUsArrow from "../../assets/cil_arrow-right.png";
function TalkToUs({ tabs }) {
  return (
    <div className="TalkTOUs-container">
      <p>Manage your money better with Modern Treasury Platforms</p>
      <img src={OBJECTS} alt="TALK TO US LOGO" className="object-image" />
      <Link className="talkToUS-buttn">
        Talk to Us&nbsp;&nbsp;
        <img src={TalkTOUsArrow} alt="TalkTOUsArrow" />
      </Link>
    </div>
  );
}

export default TalkToUs;
