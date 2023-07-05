import { FormEvent, useState, KeyboardEvent } from "react";
import Tweet from "../components/Tweet";
import Header from "./../components/Header";
import Separator from "./../components/Separator";

import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Sim, verdade.",
    "Olha, faz sentido",
    "Ok.",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus id sapiente accusantium reprehenderit rem atque suscipit enim at praesentium officiis recusandae distinctio explicabo vitae quod officia blanditiis, architecto aperiam cum." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/JonatasMSantos.png"
            alt="Jonatas Santos"
          />
          <textarea
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
            onKeyDown={handleHotKeySubmit}
            name="tweet"
            id="tweet"
            value={newAnswer}
            placeholder="Tweet your answer"
          ></textarea>
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer, index) => (
        <Tweet key={index} content={answer} />
      ))}
    </main>
  );
}
