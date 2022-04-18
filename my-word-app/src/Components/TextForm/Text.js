import React,{ useState } from 'react'


export default function Text(props) {
  const [Text, setText] = useState('Enter Text ')

  return (

  <div>
    <h1>{props.heading}</h1>
    <div className="mb-3 my-3" >
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="14"></textarea>
    </div>
      <button className="btn btn-primary m-2">Change To Upper</button>
      <button className="btn btn-primary m-2">Change To Lower</button>

  </div>
   
  )
}
