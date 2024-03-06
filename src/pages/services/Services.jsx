import React from "react";
import "./Services.css";
import IHILogo from '../../assets/IHIturbo.jpg';
import Mitsubishi from '../../assets/mitsubishi.jpg';
import HolsetLogo from '../../assets/Holset.jpg';
import Borgwarner from '../../assets/borgwarner.jpg';
import garretAdvancing from '../../assets/Garret Advancing.jpg';
import masterCard from '../../assets/cardAccepted1.jpg';
import debitCard from '../../assets/cardAccepted2.jpg';
import creditCard from '../../assets/cardAccepted3.jpg';
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
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };

  const backgroundImageItems = [
    <div id="servicesReviewCard">
      <div id="servicesReviewCardInner">
        <h1>Explore Turbo Pro SA Services</h1>
        <p>
          Where Efficiency Meets Reliability - Delivering Solutions for All Turbo Needs.
        </p>
      </div>
    </div>,
    <div id="servicesReviewCard01">
      <div id="servicesReviewCardInner">
        <h1>Our Turbo Expertise</h1>
        <p>
          Unlocking Success through Innovative Turbo Solutions - Your
          Partner in Streamlining All Vehicle Parts
        </p>
      </div>
    </div>,
    <div id="servicesReviewCard02">
      <div id="servicesReviewCardInner">
        <h1>Excellence Service in Turbo Solutions</h1>
        <p>
          Driving Growth, Building Trust - Delivering Beyond Expectations Every
          Step of the Way
        </p>
      </div>
    </div>,
  ];
  const backgroundImageResponsive = {
    0: { backgroundImageItems: 1 },
    1024: { backgroundImageItems: 1 },
  };

  const paymentItems = [
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={debitCard} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={masterCard} alt="" />
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={creditCard} alt="" />
      </div>
    </div>,
  ];
  const paymentItemsResponsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };
  
  return (
    <>
      <div>
        <AliceCarousel
          mouseTracking
          items={backgroundImageItems}
          autoPlay
          disableButtonsControls={true}
          disableDotsControls={true}
          infinite={true}
          autoPlayInterval={5000}
          responsive={backgroundImageResponsive}
          animationType="fadeout"
        />
      </div>
      
      <div className="container" id="serviceBox">
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
        <div className="container" id="theParterPageSection">
          <h2>Aftermarket Replacements For All Turbo Makes</h2>
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
        <div id="aboutOffer">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div id="aboutOfferCard">
                <i class="bx bxs-car"></i>
                <p>Aftermarket Turbo Parts</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="aboutOfferCard">
                <i class="bx bx-package"></i>
                <p>Turbo Sales and Distribution</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="aboutOfferCard">
                <i class="bx bxs-car"></i>
                <p>Turbo Repairs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="theParterPageSection">
          <h2>Payment Methods Accepted</h2>
          <AliceCarousel
            mouseTracking
            items={paymentItems}
            autoPlay
            disableButtonsControls={true}
            disableDotsControls={false}
            infinite={true}
            autoPlayInterval={3000}
            responsive={paymentItemsResponsive}
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Services;
