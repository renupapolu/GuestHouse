import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Blog from '../Blog/Blog'
import Booking from '../Booking/Booking'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import { Outlet, Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa6";
import { IoMdImages, IoMdContacts } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GiFamilyHouse } from "react-icons/gi";
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
    <nav className="navbar">
      <h4  className="icon" style={{paddingLeft:'15px'}}>Kingsukh Guest House <GiFamilyHouse style={{color:'purple'}} /></h4>
    <ol>
      <li>
        <Link to="/"><button className="btn nav__btn"><IoHome /> Home</button></Link>
      </li>
      <li>
        <Link to="/blog"><button className="btn nav__btn"> <FaBlogger /> Blog</button></Link>
      </li>
      <li>
        <Link to="/gallery"><button className="btn nav__btn"> <IoMdImages /> Gallery</button></Link>
      </li>
      <li>
        <Link to="/contact"><button className="btn nav__btn"><IoMdContacts /> Contact</button></Link>
      </li>
      <li>
        <Link to="/booking"><button className="btn nav__btn"><TbBrandBooking /> Book Now</button></Link>
      </li>
    </ol>
    </nav>
      <Outlet />
      <Home />
      <br />
      <Blog />
      <Gallery />
      <Services />
      <Booking />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default NavBar;
