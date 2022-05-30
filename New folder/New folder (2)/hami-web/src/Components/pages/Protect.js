import React from 'react'
import LoveDog from '../../assets/love-dog.jpg'
import DogOutdoor from '../../assets/dog-outdoors.jpg'
import LittleBoy from '../../assets/little-boy.jpg'
import Twomixed from '../../assets/two-mixed.jpg'

function Protect() {
    return (
        <div >
            <div className='container' style={{}}>
                <div>
                    <h5 style={{ color: "red", fontFamily: "-moz-initial",fontStyle:"oblique" }}>
                        ______WHAT WE DO
                    </h5>
                </div>

                <div>
                    <h3 style={{ color:"#393D72", fontFamily: "sans-serif", fontWeight: "bold",fontStyle:"italic" }}>
                        WHAT WE DO TO PROTECT ANIMALS
                    </h3>
                </div>

                <div className='row m-4 container'>
                    <div className='card' style={{ width: "17rem",border:"none" }}>
                        <img src={LoveDog} style={{borderRadius:"10%"}} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 style={{fontSize:"18px",fontStyle:"italic",fontWeight:"bold",color:"#393D72"}}>
                            Raising money to help</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className='card' style={{ width: "17rem",border:"none" }}>
                        <img src={DogOutdoor} style={{borderRadius:"10%"}} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 style={{fontSize:"18px",fontStyle:"italic",fontWeight:"bold",color:"#393D72"}}>
                            Сlose work with services
                            </h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className='card' style={{ width: "17rem",border:"none" }}>
                        <img src={LittleBoy} style={{borderRadius:"10%"}} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 style={{fontSize:"18px",fontStyle:"italic",fontWeight:"bold",color:"#393D72"}}>
                            Pro Guided tours only</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className='card' style={{ width: "17rem",border:"none" }}>
                        <img src={Twomixed} style={{borderRadius:"10%"}} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 style={{fontSize:"18px",fontStyle:"italic",fontWeight:"bold",color:"#393D72"}}>
                            Protecting animal area</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>

            </div>




        </div>
    )
}

export default Protect