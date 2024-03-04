import React from "react";
import "./Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

function Home() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <div id="reviewCardInner">
        <h1>Turbo Pro SA</h1>
        <p>
          Where Efficiency Meets Reliability - Delivering Solutions for All Turbo Needs.
        </p>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <h1>Explore Our Turbo Expertise</h1>
        <p>
          Unlocking Success through Innovative Turbo Solutions - Your
          Partner in Streamlining All Vehicle Parts
        </p>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <h1>Experience Excellence in Turbo Solutions</h1>
        <p>
          Driving Growth, Building Trust - Delivering Beyond Expectations Every
          Step of the Way
        </p>
        <button id="homeMessage">Our Work</button>
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
                32 Van Riebeck Ave, (32D De'sun Place)<br></br>: Edenvale, Gauteng 
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
                <i class="bx bx-notepad"></i>
                <h5>Research and Development:</h5>
                <p>
                  Designing and engineering turbocharger systems require significant research and development efforts. 
                  This involves designing components, testing prototypes, and optimizing performance.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-notepad'></i>
                <h5>Sales and Distribution:</h5>
                <p>
                  Turbocharger companies sell their products to various customers, including automotive manufacturers, aftermarket retailers, and individual consumers. 
                  They may have distribution networks to reach customers worldwide.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-notepad'></i>
                <h5>Technical Support: </h5>
                <p>
                  Providing technical support to customers is crucial, especially for aftermarket installations. 
                  This includes offering installation guidance, troubleshooting assistance, and maintenance advice.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-notepad'></i>
                <h5>Product Innovation: </h5>
                <p>
                  Staying competitive in the automotive industry requires continuous product innovation. Turbocharger companies may develop new technologies, 
                  improve efficiency, and explore alternative materials to enhance their products.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-notepad'></i>
                <h5>Manufacturing:</h5>
                <p>
                  Producing turbochargers involves precision manufacturing processes. This includes machining components, assembling turbocharger units, 
                  and quality control inspections to ensure reliability and performance.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
                <i class="bx bx-notepad"></i>
                <h5>Compliance and Regulation: </h5>
                <p>
                  Ensuring compliance with industry standards and regulations is important for product safety and performance. 
                  Turbocharger companies need to adhere to emission standards in different markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="offer">
          <h4>Why Choose Us ?</h4>
          <div class="row">
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>3+</h4>
                <h5>Years of Experience</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>500+</h4>
                <h5>Completed Projects</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>380+</h4>
                <h5>Happy Clients</h5>
              </div>
            </div>

            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>50+</h4>
                <h5>Trusted Affliates</h5>
              </div>
            </div>
          </div>
          <div id="newsLetter">
            <h4>Please Subscribe To Our NewsLetter</h4>
            <p>
              Subscribe to our newsletter below so you don't miss any updates from us!,{" "}
            </p>
            <div id="newsLetterInput">
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </div>
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
