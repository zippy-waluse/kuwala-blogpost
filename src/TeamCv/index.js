
import './index.css'
function Teamcv(){
    return(
        <div className="div-container">

            <div  className="Uppercards">
            <h1 className='services-heading'>Meet The Team</h1>
        <div className='cardsContainer'>
        <div className="cardsText" id='delivery-card'>
            <h1 className="h1Tag">Mercy Chemtai</h1>
             <img src='/Images/Chemtai.jpeg' alt='Chemtai'/>
             <h2>Software Developer</h2>
            

             <a href="https://portfolio-brown-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                Mercy Chemtai's portfolio
                          </a>
            
        
              
        </div>
        <div className="cardBox" id='delivery-card'>
            <h1 className="h1Tag">Edna Kesa</h1>
            <img src='/Images/Edna.jpeg' alt='Edna'/>
            <h2>Software Developer</h2>
        </div>
        <div className="cardStack" id='delivery-card'>
            <h1 className="h1Tag">Zippy Waluse</h1>
          <img  src='/Images/Zippy.jpeg'/>
            <h2>Software Developer</h2>
        </div>
    </div>
    </div>



    <div  className="bottomcards">
        <div className='cardsContainer'>
        <div className="cardsText" id='delivery-card'>
            <h1 className="h1Tag">Mumina Abdo</h1>
            <img src='/Images/Mumina.png'/>
            <h2>Software Developer</h2>

            <a href="https://my-portfolio-pi-two-27.vercel.app/" target="_blank" rel="noopener noreferrer">
            Mumina Abdo's portfolio
                </a>
        </div>
        <div className="cardBox" id='delivery-card'>
            <h1 className="h1Tag">Scarlet Alkeyo</h1>
            <img src='/Images/Scarlet.jpg'/>
            <h2>Software Developer</h2>
        </div>
       
    </div>
    </div>

    </div>
    )
}
export default Teamcv;







