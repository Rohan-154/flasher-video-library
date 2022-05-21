import { useState } from "react";
import "../Sidebar/sidebar.css";
import { useMediaPredicate } from "react-media-hook";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const biggerThan600 = useMediaPredicate("(max-width: 700px)");
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    setSideBar((sideBar) => !sideBar);
  }, [biggerThan600]);
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
          <Link to="/liked">
            <li>
              <span>
                <i class="fa-solid fa-heart"></i>
                <span className="links_name">Liked</span>
              </span>

              <span className="tooltip">Liked</span>
            </li>
          </Link>

          <Link to="/watchLater">
            <li>
              <span className="span1">
                <i class="fa fa-clock-o"></i>
                <span className="links_name">Watch Later</span>
                <span className="tooltip">Watch Later</span>
              </span>
            </li>
          </Link>
          <Link to="/playlist">
            <li>
              <span>
                <i className="fa fa-play-circle"></i>
                <span className="links_name">Playlist</span>
              </span>
              <span className="tooltip">Playlist</span>
            </li>
          </Link>
          <Link to="/history">
            <li>
              <span>
                <i className="fa fa-history"></i>
                <span className="links_name">History</span>
              </span>
              <span className="tooltip">History</span>
            </li>
          </Link>
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
