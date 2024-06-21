import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="home">
        <h1 href="/home">MODERN TREASURY</h1>
        <p>One-stop solution for your finacial needs</p>
        <a className="LoginBtn" href="/login">
          Login
        </a>
      </div>
    </div>
  );
}
export default Home;
