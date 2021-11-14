import "./topbar.css";
import logo from "../assets/logo.jpg";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        {/* <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i> */}
        {/* <img className="logo" src={logo} alt="My Logo"></img> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          {/* <li className="topListItem">BLOGS</li> */}
        </ul>
      </div>
      <div className="topRight">
          <img className="topImage" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt=""></img>
          <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
