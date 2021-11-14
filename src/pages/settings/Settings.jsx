import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/9874003/pexels-photo-9874003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Settings Img"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" className="fileInput" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="User" />
          <label>Username</label>
          <input type="email" placeholder="user@nomail.com" />
          <label>Username</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
    </div>
  );
}
