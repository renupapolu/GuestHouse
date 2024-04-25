import './Gallery.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FcGallery } from "react-icons/fc";
const Gallery = () => {
  const images = [
    {
      original: "src/assets/GuestHouse.jpeg",
      thumbnail: "src/assets/GuestHouse.jpeg",
    },
    {
      original: "src/assets/green.jpeg",
      thumbnail: "src/assets/green.jpeg",
    },
    {
      original: "src/assets/HomeImg.jpeg",
      thumbnail: "src/assets/HomeImg.jpeg",
    },
    {
      original: "src/assets/dam.jpeg",
      thumbnail: "src/assets/dam.jpeg",
    },
    {
      original: "src/assets/room.jpeg",
      thumbnail: "src/assets/room.jpeg",
    },
    {
      original: "src/assets/mountains.jpeg",
      thumbnail: "src/assets/mountains.jpeg",
    },
  ];
  return (
    <div className='gallery'style={{borderRadius:'6px'}}>
      <h4 style={{fontStyle:'italic',paddingLeft:'20px'}}>Gallery <FcGallery /></h4>
      <h6 style={{color:'deeppink',textAlign:'center',fontStyle:'italic'}}>The whole point of taking pictures is so that you don’t have to explain things with words.</h6>
      <ImageGallery  style={{borderRadius:'6px'}}items={images}
      showPlayButton={false}
      showIndex={true}
      />
      <p style={{color:'deeppink',textAlign:'center',fontStyle:'italic'}}>
      Photography is a way of feeling, of touching, of loving. 
      What you have caught on film is captured forever… <br />
      It remembers little things, long after you have forgotten everything.</p>
    </div>
  )
};

export default Gallery
