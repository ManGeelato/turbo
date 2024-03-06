import React from "react";
import "../about/About.css";
import Banner01 from "../../assets/8.jpg";
import Footer from "../../components/footer/Footer";

function Contact() {
  return (
    <>
      <div className="container-fluid" id="aboutPage">
        <div id="aboutPageBox">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="container" id="homePage">
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
  )
}

export default Contact