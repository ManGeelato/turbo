import React from "react";
import "./About.css";
import Banner01 from "../../assets/8.jpg";
import Footer from "../../components/footer/Footer";

function About() {
  return (
    <>
      <div className="container-fluid" id="aboutPage">
        <div id="aboutPageBox">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="container">
        <div class="row" id="aboutBoxCard">
          <h4>Who Are We ?</h4>
          <div class="col-lg-6 col-md-4">
            <div id="aboutCard">
              <p>
                At <strong>Turbo PRO SA</strong>, we specialize in turbocharge solutions tailored to enhance the performance of a wide range of vehicles, including popular brands like Volkswagen (VW),
                BMW, Mercedes-Benz, and Mazda. With years of expertise and a passion for automotive innovation, we're dedicated to providing high-quality turbocharging solutions that elevate driving experiences to new heights.
              </p>
              <p>
                Our mission at <strong>Turbo PRO SA</strong> is to empower drivers with cutting-edge turbocharger technology, delivering unparalleled performance and efficiency. We strive to be at the forefront of automotive advancements, 
                continuously pushing the boundaries of turbocharging to optimize engine power and fuel economy.
              </p>
              <p>Our team comprises skilled engineers and automotive enthusiasts who bring extensive knowledge and experience to every project. We understand the unique characteristics of each vehicle brand and tailor our turbocharger solutions to meet specific performance requirements.</p>
              <p>
                Quality is at the core of everything we do. From design and manufacturing to testing and installation, we adhere to the highest industry standards to ensure the reliability and durability of our turbochargers. Our commitment to quality translates into superior performance and peace of mind for our customers.
                As technology evolves, so do we. We invest in research and development to stay ahead of the curve, continuously innovating our turbocharger designs to deliver optimal performance gains. Whether it's maximizing power output, improving throttle response, or enhancing fuel efficiency, we're dedicated to pushing the boundaries of turbocharging technology.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="aboutCard">
              <img src={Banner01} />
            </div>
          </div>
        </div>
        <div id="faq">
          <h4>Frequent Asked Questions</h4>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  When was Turbo Pro SA formed ?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What services do we offer ?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How many branches do you have ?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Which brands do we mainly work with ?
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="aboutOffer">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div id="aboutOfferCard">
                <i class="bx bxs-car"></i>
                <p>Tailored Turbo Services</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="aboutOfferCard">
                <i class="bx bx-wallet-alt"></i>

                <p>Affordable Turbo Parts</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="aboutOfferCard">
                <i class="bx bx-package"></i>
                <p>Reliable Turbo Parts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
