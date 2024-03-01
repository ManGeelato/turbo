import React from "react";
import "./Home.css";
// import Banner01 from "../../assets/pic01.jpeg";
// import Banner02 from "../../assets/pic02.jpeg";
// import Banner03 from "../../assets/pic03.jpeg";
// import Banner04 from "../../assets/pic04.jpeg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

function Home() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <div id="reviewCardInner">
        <h1>Welcome to GEE Transport Logistics</h1>
        <p>
          Where Efficiency Meets Reliability - Delivering Solutions for Seamless
          Logistics Operations.
        </p>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <h1>Explore Our Logistics Expertise</h1>
        <p>
          Unlocking Success through Innovative Supply Chain Solutions - Your
          Partner in Streamlining Operations
        </p>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <h1>Experience Excellence in Logistics</h1>
        <p>
          Driving Growth, Building Trust - Delivering Beyond Expectations Every
          Step of the Way
        </p>
        <button>Our Work</button>
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
                  150 Mars Street<br></br> Jupiter, Mars Planet
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
                  +123 771 234 5678<br></br>+123 771 234 5678<br></br>
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
                  geetransport@gmail.com<br></br> geetransport@gmail.com
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
                <i class="bx bx-bar-chart-alt-2"></i>
                <h5> Lorem Ipsum is simply dummy text</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-notepad'></i>
                <h5> Lorem Ipsum is simply dummy text</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bxs-plane-take-off'></i>
                <h5> Lorem Ipsum is simply dummy text</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-line-chart'></i>
                <h5> Lorem Ipsum is simply dummy text</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
              <i class='bx bx-conversation'></i>
                <h5> Lorem Ipsum is simply dummy text</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. .
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeBannerCard">
                <i class="bx bx-bar-chart-alt-2"></i>
                <h5> Lorem Ipsum is simply dummy text</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. .
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
                <h4>10+</h4>
                <h5>Experience</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>1000+</h4>
                <h5>Completed Projects</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>300+</h4>
                <h5>Happy Clients</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>10+</h4>
                <h5>Experience</h5>
              </div>
            </div>
          </div>
          <div id="newsLetter">
            <h4>Please Subscribe To Our NewsLetter</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
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
                      150 Mars Street<br></br>Jupiter Mars Planet
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
                      +123 773 123 3456<br></br>+123 773 123 3456
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-envelope"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      geetransport@info.com<br></br>geetransport@gmail.com
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
