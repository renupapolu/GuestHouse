import './Contact.css'
import { FaPhone } from "react-icons/fa6";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FcContacts } from "react-icons/fc";

const Contact = () => {
  return (
    <div className="contact-container">
       <img style={{ width: '150px', height: '100px' }} src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34580/business-man-telephone-clipart-md.png" alt="no img" />
        <div className="contact-info">
          <p style={{ color: 'black' }}>Address <FcContacts /></p>
          <p><a style={{ textDecorationLine: 'none' }} href="https://www.google.com/maps?ll=23.581987,86.882414&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=5871101700881520647" target="_blank"> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></p>
          <h6 style={{ color: 'black' }}>Contact Us For More Information</h6>
          <p><FaPhone style={{ fontSize: '25px', color: 'black' }} /><a style={{ textDecorationLine: 'none' }} href="tel:+1234567890"> 123-456-7890</a></p>
          <div className="social-media">
            <a href="https://mail.google.com/mail?hl=en" target="_blank"><MdEmail style={{ color: 'red', fontSize: '25px' }} /></a>
            <a href="https://www.google.com/maps?ll=23.581987,86.882414&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=5871101700881520647" target="_blank"><SiGooglemaps style={{ color: 'black', fontSize: '25px' }} /></a>
            <a href="https://facebook.com" target="_blank"><FaFacebook style={{ color: 'cornflowerblue', fontSize: '25px' }} /></a>
            <a href="https://twitter.com" target="_blank"><FaSquareXTwitter style={{ color: 'black', fontSize: '25px' }} /></a>
            <a href="https://www.youtube.com" target="_blank"><FaYoutube style={{ fontSize: '25px', color: 'red' }} /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram style={{ fontSize: '25px', color: 'deeppink' }} /></a>
          </div>
        </div>
    </div>
  );
};

export default Contact;
