import "./Dashboard.scss";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  return (
    <AuthProvider>
      <div>
        <Header></Header>

        <div className="featuredBrandsWrapper">
          <section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="black"
                fill-opacity="1"
                d="M0,64L360,32L720,96L1080,128L1440,224L1440,0L1080,0L720,0L360,0L0,0Z"
              ></path>
            </svg>
          </section>


          <h1>Your surveys</h1>
          <section className="YourSection">
            <div className="featureBox">
            <div className="textDiv">
              <h2>Lorem ipsum dolor</h2>

              <Link to="/mockBrand">View more</Link>
              </div>
            </div>
            <div className="featureBox">
            <div className="textDiv">
              <h2>Lorem ipsum dolor</h2>

              <Link to="/mockBrand">View more</Link>
              </div>
            </div>
            <div className="featureBox">
            <div className="textDiv">
              <h2>Lorem ipsum dolor</h2>

              <Link to="/mockBrand">View more</Link>
              </div>
            </div>
          </section>


          <h1>Featured brands</h1>
          <section className="featureSection">
            <div className="featureBox1">
              <h2>Lorem ipsum dolor</h2>
              <div className="textBox">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat numquam libero maxime unde molestiae repellendus aut
                  exercitationem eveniet, rem beatae provident earum, ipsa
                  explicabo, repudiandae nihil quam eos aspernatur vel.
                </p>
                <Link to="/mockBrand">View more</Link>
              </div>
            </div>
            <div className="featureBox2">
              <h2>Lorem ipsum dolor</h2>
              <div className="textBox">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat numquam libero maxime unde molestiae repellendus aut
                  exercitationem eveniet, rem beatae provident earum, ipsa
                  explicabo, repudiandae nihil quam eos aspernatur vel.
                </p>
                <Link to="/mockBrand">View more</Link>
              </div>
            </div>
            <div className="featureBox3">
              <h2>Lorem ipsum dolor</h2>
              <div className="textBox">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat numquam libero maxime unde molestiae repellendus aut
                  exercitationem eveniet, rem beatae provident earum, ipsa
                  explicabo, repudiandae nihil quam eos aspernatur vel.
                </p>
                <Link to="/mockBrand">View more</Link>
              </div>
            </div>
          </section>
        </div>
        <nav>
          <Link to="/KeyWordAnswer">KeyWordAnswer</Link>
          <Link to="/LongAnswer">LongAnswer</Link>
          <Link to="/MultipleChoice">MultipleChoice</Link>
          <Link to="/RankingAnswer">RankingAnswer</Link>
          <Link to="/ScaleAnswer">ScaleAnswer</Link>
          {/* <Link to="/SelectImg">SelectImg</Link> */}
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
