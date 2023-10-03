import React, { useState } from "react";

export default function TextForm(props) {
  //convert to uppercase
  const handleUpClick = () => {
    let NewText = text.toUpperCase();
    setText(NewText);
    props.showAlert("Text Change Into UpperCase", "success");
  };

  //convert to capitalized form
  function capitalizeText() {
    const inputTextArea = document.getElementById(
      "exampleFormControlTextarea1"
    );
    const inputText = inputTextArea.value;
    const words = inputText.split(" ");
    const capitalizedWords = [];
    for (const word of words) {
      const capitalizedWord =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      capitalizedWords.push(capitalizedWord);
    }
    const capitalizedText = capitalizedWords.join(" ");
    const outputElement = document.getElementById("capitalizedOutput");

    outputElement.textContent = capitalizedText;
    let NewText = capitalizedText;
    setText(NewText);
    props.showAlert("Text Change Into Capitalized", "success");
  }

  //convert to lowercase
  const handleLoClick = () => {
    let NewText2 = text.toLowerCase();
    setText(NewText2);
    props.showAlert("Text Change Into LowerCase", "success");
  };

  //for clear the text in text area
  const ClearClick = () => {
    let NewText2 = "";
    setText(NewText2);
    props.showAlert("Text Cleared", "warning");
  };

  //for copy the text area's texts
  const CopyClick = () => {
    let CopyText = document.getElementById("exampleFormControlTextarea1");
    CopyText.select();
    navigator.clipboard.writeText(CopyText.value);
    //for deselect the text
    document.getSelection().removeAllRanges();
    props.showAlert("Coppyed To Clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  //remove extra spaces
  const handleExtraSpaces = () => {
    let NewText = text.split(/[ ]+/);
    setText(NewText.join(" "));
    props.showAlert("Extra Spacess Removed", "success");
  };
  return (
    <>
      <div
        className="main"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="container">
          <div className="mb-3 mt-3">
            <h1>{props.heading}</h1>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Enter your text here"
              value={text}
              onChange={
                handleOnChange
              } /* this is used for type the text in textarea*/
              style={{
                background: props.mode === "light" ? "white" : "#15202b",
                color: props.mode === "light" ? "black" : "white",
              }}
            ></textarea>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mb-3 my-4 mx-2"
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>

            <button
              disabled={text.length === 0}
              className="btn btn-primary mb-3 my-4 mx-2"
              onClick={capitalizeText}
            >
              Convert to Capitalized
            </button>

            <button
              disabled={text.length === 0}
              className="btn btn-primary mb-3 my-4 mx-2"
              onClick={handleLoClick}
            >
              Convert to Lowercase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-success mb-3 my-4 mx-2"
              onClick={CopyClick}
            >
              Copy Text
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-danger mb-3 my-4 mx-2"
              onClick={ClearClick}
            >
              Clear Text
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-warning mb-3 my-4 mx-2"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
        <div className="comtainer2 my-3">
          <h1>Text Summary</h1>
          <h3>
            You Have {text.split(/\s+/).filter((t) => t !== "").length} Words
            And {text.length} Characters and{" "}
            {0.007 * text.split(/\s+/).filter((t) => t !== "").length}{" "}
            {0.007 * text.split(/\s+/).filter((t) => t !== "").length >= 1
              ? "Min"
              : "Sec"}{" "}
            to read.
          </h3>
          <h1>Preview</h1>
          <p id="capitalizedOutput">
            {text.length > 0 ? text : "Nothing To Preview!"}
          </p>
        </div>
      </div>
    </>
  );
}
