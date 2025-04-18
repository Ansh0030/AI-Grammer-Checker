import React, { useEffect, useState } from "react";
import { submitPrompt } from "./aiService";
import "./main.css";

export default function MainPage() {
  const [inputText, setInputText] = useState("");
  const [impText, setImpText] = useState("");

  useEffect(() => {
    if (inputText === "") {
      setImpText("");
    }
  }, [inputText]);

  const clearInput = async () => {
    setInputText("");
  };

  const submit = async () => {
    const result = await submitPrompt(inputText);

    if (result) {
      const reply = result.candidates?.[0]?.content?.parts?.[0]?.text;
      setImpText(reply || "No response text found.");
      console.log(result);
    } else {
      setImpText("Something went wrong with the API call.");
    }
  };

  return (
    <>
      <h1 className="header">Ai GRAMMER GENIUS</h1>

      <div className="mainContainer">
        <div className="firstBox">
          <h2 className="mainText">Enter Your Text</h2>
          <p className="mainText">
            Enter your text below and let our AI improve it.
          </p>

          <textarea
            className="inputBox"
            placeholder="Enter text here...!"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>

          <button className="button cancel" onClick={clearInput}>
            Clear Input text
          </button>

          <button className="button submit" onClick={submit}>
            Submit
          </button>
        </div>
        <div className="firstBox">
          <h2 className="mainText">!..Ai IMPROVED TEXT..!</h2>
          <p className="mainText">
            Enter your text below and let our AI improve it.
          </p>

          <textarea
            className="inputBox"
            placeholder="Improved text here...!"
            value={impText}
          ></textarea>
        </div>
      </div>
    </>
  );
}
