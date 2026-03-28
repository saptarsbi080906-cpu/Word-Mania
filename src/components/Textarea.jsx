import React, { useState } from "react";

const Textarea = (props) => {
  document.title = "Wordmania - Home";
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);

  const handleConvert = () => {
    if (text.length === 0) {
      props.showAlert("Please enter some text first!", "warning");
      return;
    }
    const newText =
      text === text.toUpperCase() ? text.toLowerCase() : text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Text case has been toggled!");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleMakeBold = () => {
    setIsBold(!isBold);
    props.showAlert("success", isBold ? "Bold removed" : "Bold applied");
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the text?")) {
      setText("");
      props.showAlert("success", "Text has been cleared!");
    }
  };

  const words = text
    .split(/\s+/)
    .filter((element) => element.length !== 0).length;

  const btnStyle = {
    backgroundColor: props.mode === "light" ? "#0d6efd" : "black",
    color: "white",
    borderColor: props.mode === "light" ? "#0d6efd" : "white",
  };

  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <h3 className="mb-3">{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className={`form-control custom-textarea ${props.mode === 'dark' ? 'placeholder-white' : 'placeholder-black'}`}
          id="myBox"
          rows="8"
          placeholder="Enter text here..."
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#353d45",
            color: props.mode === "light" ? "black" : "white",
            border:
              props.mode === "light" ? "1px solid #ced4da" : "1px solid white"
          }}
        ></textarea>

        <button className="btn my-2" onClick={handleConvert} style={btnStyle}>
          {text.length > 0 && text === text.toUpperCase()
            ? "Convert To Lowercase"
            : "Convert To Uppercase"}
        </button>

        <button
          className="btn my-2 mx-2"
          onClick={handleMakeBold}
          style={btnStyle}
        >
          {isBold ? "Make Normal" : "Make Bold"}
        </button>

        <button
          className="btn my-2 mx-2"
          onClick={handleClear}
          style={btnStyle}
        >
          Clear Text
        </button>
      </div>

      <div
        className="output my-3 container p-3 border rounded-2"
        style={{
          borderColor: props.mode === "light" ? "black" : "white",
          backgroundColor: props.mode === "light" ? "#f8f9fa" : "#13466e",
        }}
      >
        <b>Output Preview:</b>
        <p className="mt-2" style={{ fontWeight: isBold ? "bold" : "normal" }}>
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>

      <div className="container">
        <h4>{props.summary}</h4>
        <p>
          <b>{words}</b> words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>{(0.008 * words).toFixed(2)}</b> Minutes read
        </p>
      </div>
    </div>
  );
};

export default Textarea;
