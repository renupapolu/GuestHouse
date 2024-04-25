import './Services.css';
import { FaWifi } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";
import { FcServices } from "react-icons/fc";
const Services = () => {
  return (
    <div className="services">
      <h3>Our Services <FcServices /></h3>
       <div className="service">
        <p>“Exceptional hotel services enhance guest experiences.” 🌟🏨✨</p>
        <img src="src/assets/Service2.jpeg" alt="Service 1" />
        <h3>Room Cleaning</h3>
        <p>Our dedicated staff ensures your room is always clean and tidy.</p>
       </div>
      <div className="service">
        <img src="src/assets/service1.jpeg" alt="Service 2" />
        <h3>24/7 Room Service</h3>
        <p>Enjoy our round-the-clock room service for all your needs.</p>
        <p>“Room service and room views, the perfect combo.”</p>
      </div>
      <div className="service">
        <h3>Extra Services</h3>
        <p>Being on par in terms of price and quality only gets you into the game. Service wins the game.</p>
        <p> <FaWifi  style={{color:'black'}}/> Free Wifi</p>
        <p> <IoRestaurant   style={{color:'black'}}/> Restaurant </p>
        <p><MdCardTravel  style={{color:'black'}}/> Tour Guide Support </p>
      </div>
    </div>
  );
};

export default Services;
