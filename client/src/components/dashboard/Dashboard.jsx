import "./Dashboard.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "../landing/Footer";
import backgroundVideo from "../landing/media/video.mp4";
import medPhoto from "../landing/media/medical.jpg";
import surfPhoto from "../landing/media/surfing.jpg";
import treePhoto from "../landing/media/trees.jpg";
import skiPhoto from "../landing/media/ski.png";
import sailPhoto from "../landing/media/sailing1.jpg";
import hikePhoto from "../landing/media/hike.jpg";
import logo from "../landing/media/icon.png";

export default function Dashboard(props) {
  const { currentUser, getUser, getBrand } = useAuth();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (currentUser && !userInfo) {
      window.scrollTo(0, 0);
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  return (
    <AuthProvider>
      <div className="dashBoard">
        <Header></Header>
        <section className="headerVideo">
          <video autoPlay loop muted className="backgroundVideo">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </section>

        {userInfo.usertype === "admin" ? (
          props.surveySubmitted ? (
            <div id="alertBanner">
              <p>
                Survey Added!
                <br />
                Users will now have access to the survey and coupons
              </p>
            </div>
          ) : null
        ) : props.surveySubmitted ? (
          <div id="alertBanner">
            <p>
              Survey Submitted!
              <br />
              Here is your coupon code: VSCRLSHOES
            </p>
          </div>
        ) : null}

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
              <img src={medPhoto} alt="medphoto" />
              <h2>Medical Footwear</h2>

              <div
                className="couponDiv" /*onClick={useNavigate("/mockBrand")}*/
              >
                <Link to="/mockBrand">
                  <p>30% off</p>
                </Link>
              </div>
            </div>

            <div className="BrandLoveBox">
              <img src={surfPhoto} alt="surfing photo" />
              <h2>Skida</h2>
              <div className="couponDiv">
                <p>20% off</p>
              </div>
            </div>

            <div className="BrandLoveBox">
              <img src={treePhoto} alt="treephoto" />
              <h2>Yeti</h2>
              <div className="couponDiv">
                <p>25% off</p>
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
                <img src={skiPhoto} alt="skiphoto" />
                <div className="textBox">
                  <h2>Skida:</h2>
                  <p>
                    Our mission is to bring people together, encourage play,
                    generate smiles, and make a better place. 
                  </p>
                </div>
              </div>

              <div className="featureBox2">
                <img src={sailPhoto} alt="sailing photo" />
                <div className="textBox">
                  <h2>Yeti:</h2>
                  
                  <p>
                    
                    Growing up, my brother and I always had a passion for the
                    outdoors. Hunting. Fishing...
                    
                  </p>
                </div>
              </div>

              <div className="featureBox3">
                <img src={hikePhoto} alt="hiking photo" />
                <div className="textBox">
                  <h2>Salomon:</h2>
                  <p>
                    In a society where speed and stress have taken over, people
                    take less and less time to play and connect with nature.
                    
                  </p>
                </div>
              </div>

              <div className="featureBox4">
                <h1>Making data human again.</h1>
                <p>learn more here.</p>
              </div>
            </section>
            <img src={logo} alt="vsrl logo" className="VLogo" />
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

        
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}
