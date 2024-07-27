import React from "react";
import logo from "../../assets/mobil.png";
function MobilImage() {
  let styles = {
    height: "500px",
  };
  return (
    <div className="mobileImage">
      <img src={logo} alt="mobilImage" style={styles} />
    </div>
  );
}

export default MobilImage;
