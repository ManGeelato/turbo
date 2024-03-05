import React from "react";
import "./Services.css";
import Service01 from "../../assets/1.jpg";
import Service02 from "../../assets/2.jpg";
import Service03 from "../../assets/3.jpg";
import Service04 from "../../assets/4.jpg";
import Service05 from "../../assets/5.jpg";
import Service06 from "../../assets/6.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

function Services() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C, Zimbabwe ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          John Doe, USA C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Trish G, Brazil ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Travor S ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Lylod P, S Africa C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Tatenda B, Mozambique C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,

    <div id="partnerCard">
      <div id="partnerCardBox">
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };
  return (
    <>
      <div className="container-fluid" id="servicePage">
        <div id="servicePageBox">
          <h2>Our Services</h2>
        </div>
      </div>
      <div className="container" id="serviceBox">
        <div class="row" id="serviceWrap">
          <h4>What We Offer</h4>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service01} alt="" />
              <h5> Lorem Ipsum is simply dummy text</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service04} alt="" />
              <h5> Lorem Ipsum is simply dummy text</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service02} alt="" />
              <h5> Lorem Ipsum is simply dummy text</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service03} alt="" />
              <h5> Lorem Ipsum is simply dummy text</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service05} alt="" />
              <h5> Lorem Ipsum is simply dummy text</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceBoxCard">
              <img src={Service06} alt="" />
              <h5> Lorem Ipsum is simply dummy text</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
        <div className="container" id="theParterPageSection">
          <h2>Reviews</h2>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls={true}
            disableDotsControls={false}
            infinite={true}
            autoPlayInterval={3000}
            responsive={responsive}
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Services;
