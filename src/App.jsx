import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Booking from './components/Booking/Booking'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'
import { BsMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useState } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
      <Route path="blog" element={<Blog />} />
      <Route path="home" element={<Home />} />
      <Route path="booking" element={<Booking />} />
      <Route path="contact" element={<Contact />} />
      <Route path="gallery" element={<Gallery />} />
    </Route>
  )
)
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
 
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
    <div className='theme'>
    <button onClick={toggleDarkMode}>
      {darkMode ?  <FiSun  style={{ color: 'orange',fontSize: '1rem', width: '30px', height: '30px',padding:'5px',fontWeight:'bolder' }}/> : 
      <BsMoonStarsFill  style={{color:'white',fontSize: '1rem', width: '30px', height: '30px',padding:'5px',backgroundColor:'black'}}/>}
    </button> 
    </div>
    <RouterProvider router={router}/>
  </div>
 
  )
}

export default App
