import React from 'react'

export default function Text(props) {
  return (
    <div>
  <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </div>
  )
}
