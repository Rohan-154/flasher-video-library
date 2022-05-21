import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/authContext";
import "../Navbar/navbar.css";
import { useVideo } from "../../Context/dataContext";
import { Abbreviations } from "../../services/abbreviations";
const Navbar = () => {
  const { token } = useAuth();
  const [input, setInput] = useState("");
  const { dataDispatch } = useVideo();
  const searchHandler = (e) => {
      dataDispatch({
        type: Abbreviations.SEARCH_VIDEOS,
        payload: e.target.value,
      });
  };
  return (
    <div className="nav-align">
      <Link to="/explore">
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
        <button
          className="btn-com btn-icon-singular"
          // onClick={themeToggle}
        >
          <span className="btn-icon">
            {"theme" === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </span>
        </button>

        <Link to={`${token ? "/explore" : "/login"}`}>
          <button className="btn-com btn-icon-singular">
            <span className="btn-icon">
              <i class="fa-solid fa-user"></i>
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
