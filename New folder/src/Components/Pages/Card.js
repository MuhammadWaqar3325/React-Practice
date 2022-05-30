import React, { useEffect, useState } from 'react';
import Airpod1 from '../../Asse/Airpod1.jpg'



function Card() {
  const [showProucts, setshowProucts] = useState([]);
  console.log(showProucts)
  async function products() {

    const fetchData = fetch('https://fakestoreapi.com/products')
    const productData = await (await fetchData).json();
    console.log(productData)
    setshowProucts(productData);

  }

  useEffect(() => {
    products()

  }, [])




  return (
    <>
      <div className="card " style={{}}>
        <div className='row'style={{marginTop:"20px",padding:"10px "}}>
          {
            showProucts.map((item) => {
              return (<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12' style={{padding:"10px",border:"1px solid black",}}>
                <img src={item.image} className="card-img-top" style={{width:"200px",height:"300px",}} alt="images" />
                <h5 className="card-title">{item.category}</h5>
                <a href="#" className="btn btn-primary">AddtoCart</a>

              </div>)
            })
          }
        </div>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </>
  )
}

export default Card;  