import './index.css';
import React, { useState } from 'react';

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };
  return (
    <div>
  
      <div className="navbar">

      <div className="navbar-logo">
          {/* <img src="#" alt="Logo" id="logo" /> */}
        </div>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-content ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Podcast</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      
      <div className='landing-page'>

       <img src="/images/openingquotes.png" alt="quotation-marks" id='opening-quotes'/>

       <h2>PodSquad</h2>


      <div className='second-layout'>

       <img src="/images/mic.png" alt="podcast-mic" id='mic'/>
       <img src="/images/presentors.png" alt="podcast-presentors-marks" id='presentors'/>
    {/* <img src="/images/music play.png" alt="podcast-player" id='music-play'/> */}

        </div>
      <br></br><br></br><br></br>

    <img src="/images/closingquotes.png" alt="quotation-marks-player" id='closing-quotes'/>


    </div>

     </div>

  );
}

export default Homepage;