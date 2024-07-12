import MobilImage from "./MobilImage";
import LoginForm from "./LoginForm";
import "./Page.css";
import { useState } from "react";

function Page() {
  let [formdata, setFormData] = useState({
    username: "",
    login_password: "",
  });
  return (
    <>
      <div className="LoginPage">
        <MobilImage></MobilImage>
        <LoginForm formdata={formdata} setFormData={setFormData}></LoginForm>
      </div>
      <div className="footer">Modern Treasury&copy;</div>
    </>
  );
}

export default Page;
