import React from "react";
import "./Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";
import MercedesLogo from '../../assets/MercLogo.jpg'
import MazdaLogo from '../../assets/MAZDABADGE.jpg'
import BMWLogo from '../../assets/bmwLogo.jpg'
import VWLogo from '../../assets/vwLogo.jpg';

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
        <div id="homeMessage">
          <h4>What We Do.</h4>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-notepad'></i>
                <h5>Sales and Distribution:</h5>
                <p>
                  We sell new and reconditioned turbos as well as loose turbo parts including actuators, cartridges, VNT, shaft, compressor wheel and kits.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-notepad'></i>
                <h5>Aftermarket Turbos: </h5>
                <p>
                  We provide aftermarket installations and sales of new turbos and loose parts for brands like Holset, Garret, Borgwarner and Mitsubishi. 
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-notepad'></i>
                <h5>Turbo Repairs: </h5>
                <p>
                  We repair broken turbos for all makes of Mercedes Benz, (VW) Volkswagen and BMW. This
                  includes Diagnosis, Disassembly, Parts replacement, Testing & Re-Assembly.
                </p>
              </div>
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
      <Footer/>
    </>
  );
}

export default Home;
