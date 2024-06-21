import "./HomeScreen.css";
import Logo from "../../assets/homePageLogo.png";

function HomeScreen() {
  return (
    <div className="main">
      <p>THE OPERATING SYSTEM FOR MONEY MANAGEMENT</p>
      <div>Move, Track, and Reconcile Money in Real-Time.</div>
      <button className="exploreBtn">
        Explore &nbsp;
        <img src={Logo} alt="Logo" />
      </button>
    </div>
  );
}

export default HomeScreen;
