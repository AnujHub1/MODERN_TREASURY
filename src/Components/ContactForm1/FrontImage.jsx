import logo from "../../assets/submitPageImage.png";
import "./FrontImage.css";

function FrontImage() {
  return (
    <div className="image">
      <img src={logo} class="img" alt="front image" />
      <p className="frontImage_para">Talk to Us</p>
    </div>
  );
}

export default FrontImage;
