import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

interface TweetProps {
  content: string;
}

function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/JonatasMSantos.png" alt="Jônatas Santos" />

      <div className="tweet-content">
        <div className="tweet-header">
          <strong>Jônatas Santos</strong>
          <span>@jts.ms</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Tweet;
