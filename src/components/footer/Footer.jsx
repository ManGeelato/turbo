import React from "react";
import './Footer.css';
function Footer() {
  return (
    <div className="container-fluid" id="footerPage">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>Social Links</h4>
            <p>
              <i class="bx bxl-facebook"></i> Facebook Page
            </p>
            <p>
              <i class="bx bxl-instagram"></i> Instagram Page
            </p>
            <p>
              <i class="bx bxl-twitter"></i> Twitter Page
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>About Us</h4>
            <p>
              At <strong>Turbo PRO SA</strong>, we specialize in turbocharge solutions tailored to enhance the performance of a wide range of vehicles, including popular brands like Volkswagen (VW), 
              BMW, Mercedes-Benz, and Mazda. With years of expertise and a passion for automotive innovation, we're dedicated to providing high-quality turbocharging solutions that elevate driving experiences to new heights.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>Quick Links</h4>
            <p><a href="/">Home</a></p>
            <p><a href="/about">About</a></p>
            <p><a href="/services">Services</a></p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>Contact Us</h4>
            <p> 32 Van Riebeck Ave, (32D De'sun Place): Edenvale, Gauteng </p>
            <p> Mon ~ Sunday: Open Holidays</p>
            <p> +27 11 568 6754: +27 74 227 4187 </p>
            <p> sales@turboprosa.co.za </p>
          </div>
        </div>
      </div>
      <div id="footerRightCard">
        <small>All Rights Reserved &copy; Turbo Pro SA 2024. Developed by <a href="https://emmanuelkaome-mangeelato.vercel.app/" target="_blank">Emmanuel 'Gadaffi' Kaome</a></small>
      </div>
    </div>
  );
}

export default Footer;
