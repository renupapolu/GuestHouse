import './Footer.css';
import { FaSquareXTwitter,FaYoutube } from "react-icons/fa6";
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo">
            <a href="#home" style={{textDecorationLine:'none'}}> <h5><FcInfo /> Kingsukh Guest House</h5></a>
          </div>
          <p className="section__description" style={{color:'black'}}>
          Response stopped Embark on a journey where comfort, luxury,
          and adventure converge. Our meticulously curated selection 
          of hotels promises an extraordinary escape — a symphony of 
          indulgence and discovery.
          </p>
        </div>
        <div className="footer__col">
          <h5>QUICK LINKS</h5>
          <ul className="footer__links">
            <li><a href="#">Special Offers &amp; Packages</a></li>
            <li><a href="#">Room Types &amp; Amenities</a></li>
            <li><a href="#">Customer Reviews &amp; Ratings</a></li>
            <li><a href="#">Travel Tips &amp; Guides</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>OUR SERVICES</h5>
          <ul className="footer__links">
            <li><a href="#">Concierge Assistance</a></li>
            <li><a href="#">Flexible Booking Options</a></li>
            <li><a href="#">Wellness &amp; Recreation</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>CONTACT US</h5>
          <ul className="footer__links">
            <li><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></li>
            <li><a href="mailto: kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></li>
            <li><a href="tel:+919007062180">+91 9007062180 </a></li>
          </ul>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank"><FaFacebook style={{color:'cornflowerblue',fontSize:'25px'}}/></a>
            <a href="https://twitter.com" target="_blank"><FaSquareXTwitter style={{color:'black',fontSize:'25px'}} /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram style={{fontSize:'25px',color:'deeppink'}}/></a>
            <a href="https://www.youtube.com" target="_blank"><FaYoutube  style={{fontSize:'25px',color:'red'}}/></a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <hr />
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
