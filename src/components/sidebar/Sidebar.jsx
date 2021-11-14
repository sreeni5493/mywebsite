import "./sidebar.css";
import personalImg from "../assets/me.jpg";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">What is this page</span>
        <img className="sidebarImage" src={personalImg} alt="profile" />
        <p className="sidebarDescription">
          Hi! This is Sreenivas Murali. I currently work as AI Team Lead at
          ManageArtworks. This website is for my thoughts on anything related to
          two things that I am most interested in: Aritificial Intelligence and
          Games. For detailed description on my professional profile, please go to the about
          page
        </p>
        {/* <div className="sidebarItem"> */}
        <span className="sidebarTitle">Interests</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Learning New Technology</li>
          <li className="sidebarListItem">Exploring Games as an Art Form</li>
          <li className="sidebarListItem">Movies</li>
          <li className="sidebarListItem">Googling anything and everything</li>
        </ul>
        <span className="sidebarTitle">Follow me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
