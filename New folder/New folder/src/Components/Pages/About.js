import React from 'react'
import './About.css'
function About() {
  return (
    <div>
          <div className="container main">
        <div style={{textAlign: "center", paddingTop: "10px"}}>
          <h1 className="h1">Get our help</h1>
        </div>
        <form action="/action_page.php">
          <label htmlFor="fname">User Name</label>
          <input className="border border-warning  rounded" type="text" id="fname" name="User Name" placeholder="Your name.." />
          <label htmlFor="lname">Email Address</label>
          <input className="border border-danger  rounded" type="text" id="lname" name="Email Address" placeholder="Email Address.." />
          <label htmlFor="City">Your City</label>
          <select className="border border-info  rounded" id="City" name="City">
            <option value="australia">Jarnwala</option>
            <option value="canada">Faisalabad</option>
            <option value="usa">Lahore</option>
          </select>
          <label htmlFor="subject">Subject</label>
          <textarea className="border border-warning rounded " id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
          <a className="submit" href="login.html" target="_blank">Submit</a>
          {/* <button class=" border-warning rounded" style="padding: 10px; background-color: blueviolet;color: white;font-weight: 400;padding-left: 15px;padding-right: 15px;" type="submit"><a style="color: white;font-weight: 400;" href="login.html" target="-blank">Submit</a></button></a> */}
          {/* <input class="border border-warning" type="submit" value="Submit"> */}
        </form>
      </div>
    </div>
  )
}

export default About;