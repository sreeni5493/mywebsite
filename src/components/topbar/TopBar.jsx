import "./topbar.scss";
import { Person, Mail, Home, LinkedIn, Facebook, Instagram } from "@material-ui/icons";
// import HomeIcon from '@mui/icons-material/Home';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <Home />
          </a>
          <div className="iconItemContainer">
            <LinkedIn className="icon" onClick={() => window.open('https://www.linkedin.com/in/sreenivas-narasimha-murali-5b3b88187/')}/>
          </div>
          <div className="iconItemContainer">
            <Facebook className="icon" onClick={() => window.open('https://www.facebook.com/unknown5493/')}/>
          </div>
          <div className="iconItemContainer">
            <Instagram className="icon" onClick={() => window.open('https://www.instagram.com/sreeni5493/')}/>
          </div>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+919952940461</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>sreenivas@karomi.com</span>
          </div>
          
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
