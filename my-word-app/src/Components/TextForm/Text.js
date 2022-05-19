import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';


export default function Text(props) {



  const HandleOnChange = (textarea) => {
    // console.log("change")
    setText(textarea.target.value)
  }

  const HandleUp = () => {
    // console.log("uper")
    let newText = Text.toLocaleUpperCase();
    setText(newText);
  }
  const HandleLow = () => {
    // console.log("low")
    let newText = Text.toLowerCase();
    setText(newText);
  }
  const HandleClear = () => {
    let newText = "";
    setText(newText);
  }

  const HandleCopy = () => {
    console.log("copy")
    var text = document.getElementById("mybox");
    console.log(text)
    text.select();
    // console.log(text)
    // text.setSelectionRange(0, 9999);
    // console.log(text)
    navigator.clipboard.writeText(text.value);
  }
  const HandleExtrasapce = () => {
    // console.log("copy")
    let newText = Text.split("/[ ]+/");
    setText(newText.join(" "));
  }

  const [Text, setText] = useState('Enter Text Here');

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3" >
          <textarea className="form-control" onChange={HandleOnChange} value={Text} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={HandleUp}>Change To Upper</button>
        <button className="btn btn-primary m-2" onClick={HandleLow}>Change To Lower</button>
        <button className="btn btn-primary m-2" onClick={HandleClear}>Clear Text</button>
        <button className="btn btn-primary m-2" onClick={HandleCopy}>Copy Text</button>
        <button className="btn btn-primary m-2" onClick={HandleExtrasapce}>Remove Extra</button>

      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {Text.split(" ").length} Words And Charcters{Text.length} </p>
        <p>{0.008 * Text.split(" ").length}Reading Time</p>

        <h2>My Paragraph</h2>
        <p>{Text}</p>


      </div>
    </>
  )
}
