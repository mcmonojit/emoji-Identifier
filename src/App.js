import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥪": "Sandwich",
  "🍳": "Cooking",
  "🍲": "Pot of Food",
  "🍨": "Ice Cream",
  "🍛": "Curry Rice",
  "☕": "Hot Beverage",
  "🥂": "Cheers",
  "🍊": "Tangerine",
  "🥝": "Kiwi Fruit",
  "🥑": "Avocado",
  "🥦": "Broccoli",
  "🏕️": "Camping",
  "🌃": "Night with Stars",
  "😊": "Smiling",
  "😎": "Something cool or Thug Life",
  "😱": "Dumbstruck",
  "😐": "Don't know what to say or react",
  "😵": "Staggered to the point of disorientation",
  "🤢": "Very ill or feeling like throwing up",
  "😪": "Hopeless or upset",
  "🙈": "See no evil",
  "😫": "Weary",
  "😂": "Tears of joy or extreme ridicule",
  "🪔": "Diwali",
  "🎅": "Christmas",
  "☪️": "Ramadan",
  "❄️": "Snowflake",
  "🤳": "Selfie",
  "🙌": "Raising hands",
  "👏": "Clapping",
  "🙏": "Gesture of prayer, gratitude, request, or greetings",
  "🔐": "Secrecy or something held secure",
  "📳": "Vibration mode",
  "✌🏼": "Ok, peace or victory",
  "✊🏿": "Black Lives Matter",
  "🧑‍⚕️": "Doctor, medical professional or health worker",
  "🦠": "Microbe or virus",
  "☣️": "Biohazard symbol"
};

var EMOJIS = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (userInput.length === 0) {
      meaning = "Input an emoji";
    } else if (meaning === undefined) {
      meaning = "Sorry, this emoji is not present in our database";
    } else {
      meaning = "Meaning : " + meaning;
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    meaning = "Meaning : " + meaning;
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#aeb2d5", padding: "1.5rem 0rem 0.2rem 0rem" }}>
        -// emoji Identifier //-
      </h1>

      <div class="description">
        <small>
          Enter an emoji in the input box or tap on any emoji displayed below
        </small>
      </div>

      <br />

      <input id="inputbox" onChange={emojiInputHandler} />

      <div class="meaning">{meaning}</div>

      <br />
      <small class="emojiDashboardHeader">Emojis in our database</small>
      <br />

      <div class="emojiDashboard">
        {EMOJIS.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              class="emojiDisplay"
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer>
        <h4>made by Monojit Chakraborty</h4>
      </footer>
    </div>
  );
}

/*
 *
 *class --  className
 *style -- takes an object
 *
 */
