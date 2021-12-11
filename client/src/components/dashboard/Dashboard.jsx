import "./Dashboard.scss";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "../landing/Footer";

export default function Dashboard() {
  return (
    <AuthProvider>
      <div className="dashBoard">
        <Header></Header>
        <section className="headerVideo"></section>
        <div className="featuredBrandsWrapper">
          <h1 className="sectionTitle">Brand Love.</h1>
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
          <div>
            <h1 className="real1">Real People.</h1>
            <h1 className="real2">Real Stories.</h1>
          </div>
          <div className="FDiv">
            <section className="featureSection">
              <div className="featureBox1">
                <div className="textBox">
                  <h2>Skida:</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellat numquam libero maxime unde molestiae repellendus
                    aut exercitationem eveniet,
                  </p>
                </div>
              </div>

              <div className="featureBox2">
                <div className="textBox">
                  <h2>Yeti:</h2>

                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellat numquam libero maxime unde molestiae repellendus
                    aut exercitationem eveniet,
                  </p>
                </div>
              </div>

              <div className="featureBox3">
                <div className="textBox">
                  <h2>Salomon:</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellat numquam libero maxime unde molestiae repellendus
                    aut exercitationem eveniet,
                  </p>
                </div>
              </div>

              <div className="featureBox4">
                <h1>Making data human again.</h1>
                <p>learn more here.</p>
              </div>
            </section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="blueSVG"
            >
              <path
                fill="#000b76"
                fill-opacity="1"
                d="M0,128L48,133.3C96,139,192,149,288,154.7C384,160,480,160,576,144C672,128,768,96,864,117.3C960,139,1056,213,1152,234.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        <nav>
          <Link to="/KeyWordAnswer">KeyWordAnswer</Link>
          <Link to="/LongAnswer">LongAnswer</Link>
          <Link to="/MultipleChoice">MultipleChoice</Link>
          <Link to="/RankingAnswer">RankingAnswer</Link>
          <Link to="/ScaleAnswer">ScaleAnswer</Link>
          {/* <Link to="/SelectImg">SelectImg</Link> */}
          <Link to="/ShortAnswer">ShortAnswer</Link>
          <Link to="/MockBrand">MockBrand</Link>
        </nav>
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}
