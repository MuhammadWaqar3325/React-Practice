import React,{ useState } from 'react'


export default function Text(props) {

  
 
  const [Text, setText] = useState('Enter Text    Here');
  const HandleOnChange = (textarea)=>{
    // console.log("change")
    setText(textarea.target.value)
  }

  const HandleUp = ()=>{
    // console.log("uper")
    let newText = Text.toLocaleUpperCase();
    setText(newText);
  }
  const HandleLow = ()=>{
    // console.log("low")
    let newText = Text.toLowerCase();
    setText(newText);
  }


  return (
<>
  <div>
    <h1>{props.heading}</h1>
    <div className="mb-3 my-3" >
    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={HandleOnChange}  value={Text} itemID="mybox" rows="14"></textarea>
    </div>
      <button className="btn btn-primary m-2" onClick={HandleUp}>Change To Upper</button>
      <button className="btn btn-primary m-2"onClick={HandleLow}>Change To Lower</button>

  </div>
  <div className="container">
    <h1>Your Text Summary</h1>
    <p>{Text.split}</p>
  </div>
  </>
  )
}
