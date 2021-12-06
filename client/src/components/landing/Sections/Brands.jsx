import React from "react";
import hiker from "../media/hiker.jpeg";
import sneakers from "../media/sneakers.jpeg";
import tent from "../media/tent.jpeg";
import Footer from "../Footer";

function Brands() {
  return (
    <>
      <div className="brands-section" id="brands">
        <div className="brandsTitle">What brands are saying...</div>
        <div className="brandsFlexContainer">
          <div className="brandsMiniFlex">
            <img className="brandsImage" src={hiker} />
            <p className="brandsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="brandsMiniFlex">
            <img className="brandsImage" src={sneakers} />
            <p className="brandsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="brandsMiniFlex">
            <img className="brandsImage" src={tent} />
            <p className="brandsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Brands;
