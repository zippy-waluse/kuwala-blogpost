import './index.css';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";






const Footer = () => {
   return(
       <div className='container'>
       <div className='color'>
   <div>
   <h1 className='follow'>Follow Us On</h1>


    <div className="images">
           <p><FaFacebook size='1.9rem' /></p>
           <p><RiInstagramFill size='1.9rem' /></p>
           <p><FaXTwitter size='1.9rem' /></p>
          
           </div>
         
       </div>
       <div className='subscribe'>
       <h1>Contact us</h1>
      
       </div>
      
       <div className='bottomfooter'>
           <div id="whatsapp">
           <p><FaSquareWhatsapp size='3.4rem' /></p>
           <p>0725680764</p>
           </div>
           <div id="calling">
               <p><IoCall size='3.4rem' /></p>
           <p>+254769071112</p>
           </div>
           <div id="email">
               <p><TfiEmail size='3.4rem' /></p>
           <p>saviors@gmail.com</p>
           </div>
       </div>
       </div>
       </div>
   );
}


export default Footer