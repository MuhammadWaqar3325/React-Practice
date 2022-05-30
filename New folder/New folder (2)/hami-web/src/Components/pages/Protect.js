import React from 'react'

function Protect() {
    return (
        <>
            <div className='container'>
                <div>
                    <h5 style={{ color: "red", fontFamily: "-moz-initial" }}>
                        ______WHAT WE DO
                    </h5>
                </div>
                <div>
                    <h3 style={{ color: "green", fontFamily: "monospace", fontWeight: "bolder," }}>
                        WHAT WE DO TO PROTECT ANIMALS
                    </h3>
                </div>
                <div className='row m-4 '>
                    <div className='card' style={{width: "18rem",}}>
                        <img src={''} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                    <div className='card' style={{width: "18rem",}}>
                        <img src={''} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>                    <div className='card' style={{width: "18rem",}}>
                        <img src={''} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                </div>

            </div>




        </>
    )
}

export default Protect