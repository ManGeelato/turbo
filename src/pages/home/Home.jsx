import React from "react";
import "./Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";
import MercedesLogo from '../../assets/MercLogo.jpg'
import MazdaLogo from '../../assets/MAZDABADGE.jpg'
import BMWLogo from '../../assets/bmwLogo.jpg'
import VWLogo from '../../assets/vwLogo.jpg';
import Service01 from "../../assets/1.jpg";
import Service02 from "../../assets/shaft.jpg";
import Service03 from "../../assets/compressorWheel.jpg";
import Service04 from "../../assets/turboShaft.jpg";
import Service05 from "../../assets/5.jpg";
import Service06 from "../../assets/BearingHousing.jpg";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

function Home() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <div id="reviewCardInner">
        <h1>Turbo Pro SA</h1>
        <p>
          Where Efficiency Meets Reliability - Delivering Solutions for All Turbo Needs.
        </p>
        {/* <button><a href="/services"></a>Our Work</button> */}
      </div>
    </div>,
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <h1>Explore Our Turbo Expertise</h1>
        <p>
          Unlocking Success through Innovative Turbo Solutions - Your
          Partner in Streamlining All Vehicle Parts
        </p>
        {/* <button>Our Work</button> */}
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <h1>Experience Excellence in Turbo Solutions</h1>
        <p>
          Driving Growth, Building Trust - Delivering Beyond Expectations Every
          Step of the Way
        </p>
        {/* <button id="homeMessage">Our Work</button> */}
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };


  return (
    <>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          disableButtonsControls={true}
          disableDotsControls={true}
          infinite={true}
          autoPlayInterval={5000}
          responsive={responsive}
          animationType="fadeout"
        />
      </div>
      <div className="container" id="homePage">
        <div class="row" id="homePageBox">
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-map"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                32 Van Riebeck Ave, (32D De'sun Place)<br></br> Edenvale, Gauteng 
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard" class="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-calendar"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  Mon ~ Sunday<br></br>Open Holidays
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard" class="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-phone"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  +27 11 568 6754<br></br>+27 74 227 4187<br></br>
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard" class="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-envelope"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  sales@turboprosa.co.za<br></br> sales@turboprosa.co.za
                  <br></br>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div class="row" id="serviceWrap">
          <h4>Sales and Turbo Charger Repairs</h4>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service01} alt="" />
              <h5>Centre Core or Cartridge</h5>
              <p>
                This element houses the key elements responsible for playing a vital role in extracting energy from exhaust gases and compressing intake air, thereby improving engine performance and efficiency. 
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service04} alt="" />
              <h5>Complete Turbo Chargers</h5>
              <p>
                Complete turbochargers play a crucial role in modern engine technology, enabling vehicles to achieve higher performance, improved fuel efficiency, and reduced emissions without sacrificing power or torque.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service02} alt="" />
              <h5>Turbo Shafts</h5>
              <p>
                Responsible for facilitating the transfer of energy from exhaust gases to intake air, 
                contributing to increased engine performance and efficiency essential for reliable turbocharger operation
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service03} alt="" />
              <h5>Turbo Compressor Wheel</h5>
              <p>
                Responsible for boosting engine performance by compressing intake air to higher pressures,
                playing a role in the efficiency and effectiveness of the turbocharger.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service05} alt="" />
              <h5>Electronic Actuator</h5>
              <p>
                It enables advanced control over boost pressure, turbine geometry, and transient performance characteristics improving engine efficiency, performance, and drivability.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service06} alt="" />
              <h5> Bearing Housing</h5>
              <p>
                The bearing housing is a critical component of the turbocharger assembly, providing support, sealing, and cooling for the rotating shaft and bearings.
              </p>
            </div>
          </div>
        </div>
        <div id="offer">
          <h4>Brands We Specialize In</h4>
          <div class="row">
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <img src={MercedesLogo} />
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
              <img src={MazdaLogo} />
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <img src={BMWLogo} />
              </div>
            </div>

            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
              <img src={VWLogo} />
              </div>
            </div>
          </div>
          {/* <div id="newsLetter">
            <h4>Please Subscribe To Our NewsLetter</h4>
            <p>
              Subscribe to our newsletter below so you don't miss any updates from us!,{" "}
            </p>
            <div id="newsLetterInput">
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </div> */}
        </div>
        <div id="mission">
          <h4>
            Empowering Businesses,
            <br /> Connecting Communities ,<br /> Join Us on the Journey to
            Greater Efficiency.
          </h4>
        </div>
        <div id="homeContact">
          <div class="row">
            <div class="col-lg-8 col-md-4">
              <form class="row g-3" id="homeContactForm">
                <h4>Get InTouch With Us</h4>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Surname
                  </label>
                  <input type="text" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Email
                  </label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Phone Number
                  </label>
                  <input type="number" class="form-control" id="inputAddress" />
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeContactCard">
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-map"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                    32 Van Riebeck Ave, (32D De'sun Place)<br></br>: Edenvale, Gauteng 
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-calendar"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      Mon ~ Sunday<br></br>Open Holidays
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-phone"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      +27 11 568 6754<br></br>+27 74 227 4187<br></br>
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-envelope"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      sales@turboprosa.co.za<br></br> sales@turboprosa.co.za
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="map">
          <h4>Find Us Here</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5333650553034!2d28.15307557541321!3d-26.146753677112017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95124c665edded%3A0x1b7e4a39fb4db56!2s32%20Van%20Riebeeck%20Ave%2C%20Edenvale%2C%20Johannesburg%2C%202000!5e0!3m2!1sen!2sza!4v1709716272741!5m2!1sen!2sza" id="map" loading="lazy">
          </iframe>
        </div>
      <Footer/>
    </>
  );
}

export default Home;
