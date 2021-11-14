import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Sreenivas</span>
        <span className="headerTitleLg">Blogs and Articles</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/9874003/pexels-photo-9874003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      ></img>
    </div>
  );
}
