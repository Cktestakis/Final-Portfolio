import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius
          </a>
          <div className="itemContainer"></div>
          <Person className="icon" />
          <span>801.580.8581</span>
          <div className="itemContainer"></div>
          <Mail className="icon" />
          <span>codyktestakis@gmail.com</span>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
