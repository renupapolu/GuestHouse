import './Home.css';
import { motion } from 'framer-motion';
import { FaEarlybirds } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 5 }}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(245, 211, 217)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className='bg'>
        <p className='quote' style={{ color: 'deeppink', textAlign: 'center' }}>Welcome To KingSukh Guest House <FaEarlybirds /></p>
        <div className="full-screen-image">
          <img src="src/assets/HomeImg.jpeg" alt="no image" />
        </div>
      </div>
    </motion.div>
  )
}

export default Home
