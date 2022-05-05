import { useState } from "react";
import "../Sidebar/sidebar.css";
const Sidebar = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <div className={`sidebar ${sideBar ? "open" : ""}`}>
        <div className="logo-details">
          <span>
            <i className="fa-solid fa-bolt icon"></i>
          </span>
          <div className="logo_name">Flasher</div>
          <i
            className="bx bx-menu"
            id="btn"
            onClick={() => setSideBar((sideBar) => !sideBar)}
          ></i>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">
              <i class="fa-solid fa-heart"></i>
              <span className="links_name">Liked</span>
            </a>
            <span className="tooltip">Liked</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-clock-o"></i>
              <span className="links_name">Watch Later</span>
            </a>
            <span className="tooltip">Watch Later</span>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-play-circle"></i>
              <span className="links_name">Playlist</span>
            </a>
            <span className="tooltip">Playlist</span>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-history"></i>
              <span className="links_name">History</span>
            </a>
            <span className="tooltip">History</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <div className="name_job">
                <div className="name">Rohan Dubey</div>
                <div className="job"> Wannabe Developer</div>
              </div>
            </div>
            <i
              className="bx bx-log-out"
              id="log_out"
              style={{ color: "white" }}
            ></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Sidebar };
