import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/authContext";
import "../Navbar/navbar.css";
import { useVideo } from "../../Context/dataContext";
import { Abbreviations } from "../../services/abbreviations";
import { useTheme } from "../../Context/themeContext";
const Navbar = () => {
  const { token, logOutHandler } = useAuth();
  const [input, setInput] = useState("");
  const { dataDispatch } = useVideo();
  const searchHandler = (e) => {
    dataDispatch({
      type: Abbreviations.SEARCH_VIDEOS,
      payload: e.target.value,
    });
  };
  const { theme, themeToggle } = useTheme();
  return (
    <div
      className="nav-align"
      style={{
        color: theme === "light" ? "black" : "#fff",
        backgroundColor: theme === "light" ? "#ffe182" : "#191921",
      }}
    >
      <Link to="/">
        <h1 className="line-height-extra">
          <i class="fa-solid fa-bolt"></i> Flasher
        </h1>
      </Link>

      <div class="search-box">
        <span class="search-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className="search-txt"
          name="search"
          placeholder="Search Videos by title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => searchHandler(e)}
        />
      </div>
      <div>
        <Link to='/playlist' >
          <button
            className="btn-com btn-icon-singular"
            style={{
              color: theme === "light" ? "black" : "#fff",
              backgroundColor: theme === "light" ? "#ffe182" : "#191921",
            }}
          >
            <span className="btn-icon">
              <i className="fa fa-play-circle"></i>
            </span>
          </button>
        </Link>
        <button
          className="btn-com btn-icon-singular"
          onClick={themeToggle}
          style={{
            color: theme === "light" ? "black" : "#fff",
            backgroundColor: theme === "light" ? "#ffe182" : "#191921",
          }}
        >
          <span className="btn-icon">
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </span>
        </button>

        <Link to={`${token ? "/" : "/login"}`}>
          <button
            className="btn-com btn-icon-singular"
            style={{
              color: theme === "light" ? "black" : "#fff",
              backgroundColor: theme === "light" ? "#ffe182" : "#191921",
            }}
          >
            <span className="btn-icon">
              {!token ? (
                <i class="fa-solid fa-user"></i>
              ) : (
                <i
                  class="fa-solid fa-arrow-right-from-bracket"
                  onClick={() => logOutHandler()}
                ></i>
              )}
            </span>
          </button>
        </Link>
      </div>
      <div class="search-box search-box-mob">
        <span class="search-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className="search-txt"
          name="search"
          placeholder="Search Videos by title"
          value={input}
          onChange={() => setInput(e.target.value)}
          onKeyDown={() => searchHandler(e)}
        />
      </div>
    </div>
  );
};

export { Navbar };
