import '../Fixed-Footer/footer.css';
const Footer = () => {
  return (
    <>
      <div className="fix-footer-wrap">
        <ul className="ul-fix-footer">
          <li>
            <a href="#">
              <i class="fa-solid fa-heart"></i>
              <span className="fix-footer-field"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-clock-o"></i>
              <span className="fix-footer-field"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-play-circle"></i>
              <span className="fix-footer-field"></span>
            </a>
          </li>
          <li>
            <a href="#">
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
