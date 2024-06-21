import Navbar from "../HomeScreen/Navbar";
import TalkToUs from "./TalkUoUs";
import "./NavbarGruop.css";

function NavbarGruop() {
  // const tabs = [
  //   ["Payments", "Ledgers", "Reconciliation", "Platform Overview"],
  //   ["Integrations", "Knowledge Hub", "Journal", "Glossary"],
  //   ["API References"],
  //   ["Pricing rates"],
  //   ["Talk to us", "Submit a query"],
  // ];

  return (
    <div className="NavbarGroup-Container">
      <div className="navbaa">
        <Navbar></Navbar>
      </div>
      <TalkToUs></TalkToUs>
    </div>
  );
}

export default NavbarGruop;
