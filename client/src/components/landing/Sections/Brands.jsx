import React from "react";
import hiker from "../media/hiker.jpeg";
import sneakers from "../media/sneakers.jpeg";
import tent from "../media/tent.jpeg";

function Brands() {
  return (
    <>
      <div className="brands-section" id="brands">
        <div className="brandsTitle">What brands are saying...</div>
        <div className="brandsFlexContainer">
          <div className="brandsMiniFlex">
            <img className="brandsImage" src={hiker} />
            <p className="brandsText">
              VSCRL allows us to create better products from a more informed position. 
            </p>
            <p className="brandName"> - Mountain Gear East</p>
          </div>
          <div className="brandsMiniFlex">
            <img className="brandsImage" src={sneakers} />
            <p className="brandsText">
              Before VSCRL, we didn't have time to conduct meaningful
              consumer surveys. Now we do!
            </p>
            <p className="brandName"> - Trax</p>
          </div>
          <div className="brandsMiniFlex">
            <img className="brandsImage" src={tent} />
            <p className="brandsText">
              VSCRL makes product research easy and fun! Highly recommend you join!
            </p>
            <p className="brandName"> - Tents R Us</p>
      
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
