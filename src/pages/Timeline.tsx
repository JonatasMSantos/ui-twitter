import Tweet from "./../components/Tweet";
import Header from "./../components/Header";
import Separator from "./../components/Separator";

import "./Timeline.css";
import { FormEvent, useState, KeyboardEvent } from "react";

export function TimeLine() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "Tweet 1",
    "Olá, Tweet 2",
    "Esse é o Tweet 3",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/JonatasMSantos.png"
            alt="Jonatas Santos"
          />
          <textarea
            name="tweet"
            id="tweet"
            placeholder="what's happining?"
            onKeyDown={handleHotKeySubmit}
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          ></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet, index) => (
        <Tweet key={index} content={tweet} />
      ))}
    </main>
  );
}
