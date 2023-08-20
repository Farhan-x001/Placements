import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
      <div class="topIcons">
    <a href="https://www.facebook.com/profile.php?id=100040854969977" target="_blank" rel="noopener noreferrer">
        <i class="topIcon fab fa-facebook-square"></i>
    </a>
    <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
        <i class="topIcon fab fa-instagram-square"></i>
    </a>
    <a href="https://www.pinterest.com/your-profile" target="_blank" rel="noopener noreferrer">
        <i class="topIcon fab fa-pinterest-square"></i>
    </a>
    <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
        <i class="topIcon fab fa-twitter-square"></i>
    </a>
</div>

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://i.ibb.co/72WLwPw/1670780464146.jpg"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

