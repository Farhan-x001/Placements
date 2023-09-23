import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            ayush helps 
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      AYUSH systems are deeply rooted in ancient Indian traditions and philosophies. They offer a holistic approach to health and wellness, focusing not only on the treatment of diseases but also on preventing illnesses by promoting a balanced and harmonious lifestyle. AYUSH practices continue to gain recognition and acceptance worldwide for their effectiveness in improving the quality of life and enhancing overall health and well-being. Many countries are integrating AYUSH therapies into their healthcare systems, and research in these areas continues to expand our understanding of their benefits.
      </p>
    </div>
  );
}
