import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
       
            {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImgright"
              src="https://i.ibb.co/xqNmL8K/ayush-side-1.jpg"
              alt=""
            />
          </Link>
          
        ) : (
          <ul className="topList">
            
            
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
   
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/cabin">
                INVESTOR'S CABIN
            </Link>
          </li>
          <div classname="midlogo">
            <img 
            className="logoimg"
          src="https://i.ibb.co/0QFChH7/logo-ayush-center.png" 
          alt="logo-ayush-center" ></img></div>
          <li className="topListItem">
          <Link className="link" to="/startups">
              STARTUPS
            </Link>
          </li>
        
          <li className="topListItem">
            <Link className="link" to="/write">
              SOCIAL CENTER
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="topRight">
      
       
        <i className="topSearchIcon fas fa-search"></i>
        <li className="topListItem">
              <Link className="link" to="/login">
                 LOGIN
              </Link>
            </li>
        {user && <li className="topright">LOGOUT</li>}
      </div>
    </div>
  );
}



