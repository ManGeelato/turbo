import React from "react";
import "./Services.css";
import Service01 from "../../assets/1.jpg";
import Service02 from "../../assets/turboShaft.jpg";
import Service03 from "../../assets/3.jpg";
import Service04 from "../../assets/4.jpg";
import Service05 from "../../assets/5.jpg";
import Service06 from "../../assets/BearingHousing.jpg";
import IHILogo from '../../assets/IHIturbo.jpg';
import Mitsubishi from '../../assets/mitsubishi.jpg';
import allTurbos from '../../assets/allTurbos.jpg';
import HolsetLogo from '../../assets/Holset.jpg';
import Borgwarner from '../../assets/borgwarner.jpg';
import garretAdvancing from '../../assets/Garret Advancing.jpg';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

function Services() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={IHILogo} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={Mitsubishi} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={HolsetLogo} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={IHILogo} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={Borgwarner} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={garretAdvancing} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={allTurbos} alt="" />
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
          <h4>We Sell & Repair</h4>
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
        <div className="container" id="theParterPageSection">
          <h2>Aftermarket Turbo Brands</h2>
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
