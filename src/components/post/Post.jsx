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
            the current genS
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      # Current gen ?

Well these days there is a buzz in the community that the days of AI eating jobs are at the forefront . People are reacting on the current situation and posting their thought process that most of the development jobs are at its end ! 👀

https://lnkd.in/d87DhSza (watch this before u go down 💭💭💭💭)

⚡ Let's join the trending i have my say let's take up an example -”everything depends on time” back in the day late 1900 the most advanced or buzz in war zone was the aircrafts the war ships or the combat air crafts that where the beast at that time but if u see now we have American bombers crafts or the automated drones

⬆️The point is we just updated the best what we had but it doesn't mean that it will end up the livelihood of the olden devs / productions team . We can't depend on past excell sheets or those Lightroom now if i give a particular task let's say edit a photo and i want bright pixels or a glossy pro background it would literally be an idiotic step it u go like layers, distortion etc whereas u could finish up the task by epic application such as Remini or photoroom which is ai powered

⏳The thing is it's not the time to say that it's the end actually it's the time for evolving. Around me i have seen that” Indians are like slaves (employee heads)“that something we can't change but we have to adopt the current trends and scratch the things up , because gpt or AI will always be less effective than the human man because what actually built up is by your innovative approach

💭We actually have to update our resources if u wanna be a part of this fast growing hub than u have to be inclined with the current atmosphere it's the key or basic glimpse of web3 . Best research papers for u is how the current organisation or platform are reacting to this ai centric time …

Well it just goes on and on and on

The below link is what sir N. R. Narayana Murthy marking points which was shot by moneycontrol.com

in a thought process with Prithvi Narve 👀💭💭💭

#ai #community #people #jobs #development #research #change #team
https://lnkd.in/d7F6tsJ3
      </p>
    </div>
  );
}
