import React from 'react'
import sli5  from "../../assets/sli5.jpg"
import sliHD from "../../assets/sliHD.jpg"
import sli4 from '../../assets/sli4.jpg'

function Slider() {
  return (
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img height="500px" src={sli5} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block"><h5>Birds images</h5>
              <p>We'll help you with bird identification sharing birds sounds and images.</p></div>
    
          
          </div>
          <div className="carousel-item">
            <img height="500px" src={sliHD} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>All birds information</h1>
              <p>We are glad to represent you a bird watching app with latest birds information.</p></div>
    
          </div> 
          <div className="carousel-item">
            <img height="500px" src={sli4} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5><a className="my-from-img" href="" target="_blank">Keep track of your observations</a>
            </h5><p>Make notes where, when and what species you observed, see your statistics and
               <a href="" target="_blank">much more</a>.</p></div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    
    
    </>
  )
}

export default Slider