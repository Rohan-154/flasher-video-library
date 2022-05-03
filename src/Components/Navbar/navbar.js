import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
const Navbar = () => {
  return (
    <div className="nav-align">
      <Link to="/">
        <h1 className="line-height-extra">
          <i class="fa-solid fa-bolt"></i> Flasher
        </h1>
      </Link>

      <div class="search-box">
        <span class="search-icon">
          {" "}
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className="search-txt"
          name=""
          placeholder="Search Videos.."
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
        <button className="btn-com btn-icon-singular">
          <span className="btn-icon">
            <i class="fa-solid fa-user"></i>
          </span>
        </button>
      </div>
      <div class="search-box search-box-mob">
        <span class="search-icon">
          {" "}
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className="search-txt"
          name=""
          placeholder="Search Videos.."
        />
      </div>
    </div>
  );
};

export { Navbar };
