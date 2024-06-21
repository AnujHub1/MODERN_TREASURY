import MobilImage from "./MobilImage";
import LoginForm from "./LoginForm";
import "./Page.css";

function Page() {
  return (
    <>
      <div className="LoginPage">
        <MobilImage></MobilImage>
        <LoginForm></LoginForm>
      </div>
      <div className="footer">Modern Treasury&copy;</div>
    </>
  );
}

export default Page;
