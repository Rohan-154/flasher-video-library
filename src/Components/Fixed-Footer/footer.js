import { Link } from 'react-router-dom';
import '../Fixed-Footer/footer.css';
import { useLocation } from 'react-router-dom';
const Footer = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <>
      <div className="fix-footer-wrap">
        <ul className="ul-fix-footer">
        <li className={splitLocation[1] === "" ? "active-navbar" : ""}>
           <Link to='/'>
            <i class="fa-solid fa-house" style={{
                color: `${splitLocation[1] === "" ? "#5570f6" : "black"}`,
              }}></i>
              <span className="fix-footer-field"></span>
              </Link>
          </li>
          <li >
            <Link to='/liked'>
              <i class="fa-solid fa-heart" style={{
                color: `${splitLocation[1] === "liked" ? "#5570f6" : "black"}`,
              }}></i>
              <span className="fix-footer-field"></span>
              </Link>
          </li>
          <li>
            <Link to='/watchLater'>
              <i class="fa fa-clock-o" style={{
                color: `${splitLocation[1] === "watchLater" ? "#5570f6" : "black"}`,
              }}></i>
              <span className="fix-footer-field"></span>
              </Link>
          </li>
          <li>
           <Link to='/playlist'>
              <i className="fa fa-play-circle" style={{
                color: `${splitLocation[1] === "playlist" ? "#5570f6" : "black"}`,
              }}></i>
              <span className="fix-footer-field"></span>
              </Link>
          </li>
          <li>
            <a>
              <i className="fa fa-history"></i>
              <span className="fix-footer-field"></span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Footer };
