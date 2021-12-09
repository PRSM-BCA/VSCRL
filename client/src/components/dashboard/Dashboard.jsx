import "./Dashboard.scss";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  return (
    <AuthProvider>
      <div className="dashBoard">
        <Header></Header>
        <section className="headerVideo"></section>
        <div className="featuredBrandsWrapper">
          <h1 className="sectionTitle">Brand Love</h1>
          <section className="YourSection">
            <div className="BrandLoveBox1">
              <h2>Spare two cents?</h2>
              <div className="textDiv">
                <p>Discover how your insights earn rewards.</p>
              </div>
            </div>

            <div className="BrandLoveBox">
              <h2>Medical Footwear</h2>
              <div className="couponDiv">
                <p>30% off</p>
              </div>
            </div>

            <div className="BrandLoveBox">
              <h2>Lorem ipsum dolor</h2>
              <div className="couponDiv">
                <p>20% off</p>
              </div>
            </div>

            <div className="BrandLoveBox">
              <h2>TBT</h2>
              <div className="couponDiv">
                <p>Coming soon</p>
              </div>
            </div>
          </section>

          <h1 className="real1">Real people.</h1>
          <h1 className="real2">Real Stories.</h1>
          <section className="featureSection">

            <div className="featureBox1">
              <div className="textBox">
              <h2>Skida:</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat numquam libero maxime unde molestiae repellendus aut
                  exercitationem eveniet,
                </p>
          
              </div>
            </div>

            <div className="featureBox2">
              <div className="textBox">
              <h2>Yeti:</h2>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat numquam libero maxime unde molestiae repellendus aut
                  exercitationem eveniet,
                </p>
          
              </div>
            </div>
            
            <div className="featureBox3">
              <div className="textBox">
              <h2>Salomon:</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat numquam libero maxime unde molestiae repellendus aut
                  exercitationem eveniet,
                </p>
          
              </div>
            </div>

            <div className="featureBox4">
              <h1>Making data human again.</h1>
              <p>learn more here.</p>
            </div>
          </section>
        </div>
        <nav>
          <Link to="/KeyWordAnswer">KeyWordAnswer</Link>
          <Link to="/LongAnswer">LongAnswer</Link>
          <Link to="/MultipleChoice">MultipleChoice</Link>
          <Link to="/RankingAnswer">RankingAnswer</Link>
          <Link to="/ScaleAnswer">ScaleAnswer</Link>
          <Link to="/SelectImg">SelectImg</Link>
          <Link to="/ShortAnswer">ShortAnswer</Link>
        </nav>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="black"
            fill-opacity="1"
            d="M0,32L360,128L720,224L1080,288L1440,160L1440,320L1080,320L720,320L360,320L0,320Z"
          ></path>
        </svg>
      </div>
    </AuthProvider>
  );
}
