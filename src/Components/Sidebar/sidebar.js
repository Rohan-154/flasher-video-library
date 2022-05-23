import { useState } from "react";
import "../Sidebar/sidebar.css";
import { useMediaPredicate } from "react-media-hook";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../Context/themeContext";
const Sidebar = () => {
  const biggerThan600 = useMediaPredicate("(max-width: 700px)");
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    setSideBar((sideBar) => !sideBar);
  }, [biggerThan600]);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`sidebar ${sideBar ? "open" : ""}`}
        style={{
          backgroundColor: theme === "light" ? "#f6b53c" : "#191921",
        }}
      >
        <div className="logo-details">
          <span>
            <i
              className="fa-solid fa-bolt icon"
              style={{
                color: theme === "light" ? "#000000" : "#fff",
              }}
            ></i>
          </span>
          <div
            className="logo_name"
            style={{
              color: theme === "light" ? "black" : "#db920a",
            }}
          >
            Flasher
          </div>
          <i
            className="bx bx-menu"
            id="btn"
            onClick={() => setSideBar((sideBar) => !sideBar)}
            style={{
              color: theme === "light" ? "#000000" : "#fff",
            }}
          ></i>
        </div>
        <ul className="nav-list">
          <Link to="/">
            <li
              className={splitLocation[1] === "" ? "active-navbar" : ""}
              style={{
                color: theme === "light" ? "black" : "#fff",
              }}
            >
              <span>
                <i
                  class="fa-solid fa-house"
                  style={{
                    color: theme === "light" ? "#000000" : "#fff",
                  }}
                ></i>
                <span className="links_name">Home</span>
              </span>

              <span className="tooltip">Home</span>
            </li>
          </Link>

          <Link to="/liked">
            <li
              className={splitLocation[1] === "liked" ? "active-navbar" : ""}
              style={{
                color: theme === "light" ? "black" : "#fff",
              }}
            >
              <span>
                <i
                  class="fa-solid fa-heart"
                  style={{
                    color: theme === "light" ? "#000000" : "#fff",
                  }}
                ></i>
                <span className="links_name">Liked</span>
              </span>

              <span className="tooltip">Liked</span>
            </li>
          </Link>

          <Link to="/watchLater">
            <li
              className={
                splitLocation[1] === "watchLater" ? "active-navbar" : ""
              }
              style={{
                color: theme === "light" ? "black" : "#fff",
              }}
            >
              <span className="span1">
                <i
                  class="fa fa-clock-o"
                  style={{
                    color: theme === "light" ? "#000000" : "#fff",
                  }}
                ></i>
                <span className="links_name">Watch Later</span>
                <span className="tooltip">Watch Later</span>
              </span>
            </li>
          </Link>
          <Link to="/playlist">
            <li
              className={splitLocation[1] === "playlist" ? "active-navbar" : ""}
              style={{
                color: theme === "light" ? "black" : "#fff",
              }}
            >
              <span>
                <i
                  className="fa fa-play-circle"
                  style={{
                    color: theme === "light" ? "#000000" : "#fff",
                  }}
                ></i>
                <span className="links_name">Playlist</span>
              </span>
              <span className="tooltip">Playlist</span>
            </li>
          </Link>
          <Link to="/history">
            <li
              className={splitLocation[1] === "history" ? "active-navbar" : ""}
              style={{
                color: theme === "light" ? "black" : "#fff",
              }}
            >
              <span>
                <i
                  className="fa fa-history"
                  style={{
                    color: theme === "light" ? "#000000" : "#fff",
                  }}
                ></i>
                <span className="links_name">History</span>
              </span>
              <span className="tooltip">History</span>
            </li>
          </Link>
          <a href="https://github.com/Rohan-154">
            <li className="profile">
              <div className="profile-details">
                <div className="name_job">
                  <div className="name">Rohan Dubey</div>
                  <div className="job"> GitHub</div>
                </div>
              </div>
              <i
                className="fa-brands fa-github"
                id="log_out"
                style={{ color: "white", fontSize: "1.5rem" }}
              ></i>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export { Sidebar };
