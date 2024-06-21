import FrontImage from "./FrontImage";
import Btns from "./Btns";

export default function Contact() {
  return (
    <div style={{ height: "100vh" }}>
      <FrontImage></FrontImage>
      <div className="btns">
        <Btns data="Schedule a meet"></Btns>
        <Btns data="Submit a query"></Btns>
        <Btns data="Call customer care"></Btns>
      </div>
    </div>
  );
}
