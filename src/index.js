import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Sad from "./Sad";
import Glad from "./Glad";
import Angry from "./Angry";

import "./styles.css";

const MOODS = ["SAD", "HAPPY", "ANGWY"];

const capitalizeFLetter = (word) => {
  return word[0] + word.slice(1).toLocaleLowerCase();
};

function App() {
  const [mood, setMood] = useState(MOODS[0]);

  useEffect(() => console.log(mood));
  return (
    <div className="App">
      {mood === MOODS[0] && <Sad />}
      {mood === MOODS[1] && <Glad />}
      {mood === MOODS[2] && <Angry />}
      <h2>{capitalizeFLetter(mood)} Codesandbox Friend</h2>
      <nav>
        {MOODS.map((m) => (
          <button
            type="button"
            key={m}
            onClick={() => setMood(m)}
            className={`${m === mood ? "active" : null}`}
          >
            {m.toLocaleLowerCase()}
          </button>
        ))}
      </nav>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
