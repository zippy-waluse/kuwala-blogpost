import './index.css'
const Team= ()=>{
    return (
        <div className='container'>
        <h1 className='teammembers'>Team</h1>
        <div className='team' >
           <div className='upperteam'>
            <div>
            <img src="/Images/Chemtai.jpeg" alt="Chemtai"/>
            <div className='figure'>
            <p> Aline Mutesi </p>
            <p>Software Developer</p>
            </div>
            </div>
            <div>
            <img src="/Images/Chemtai.jpeg" alt="Chemtai" className='Chemtai'  />
            <div className='figure'>
            <p> Mercy Chemtai</p>
            <p>Software Developer</p>
            </div>
            </div>
            <div>
            <img src="/Images/Zippy.jpeg" alt="Zippy" className='Zippy'/>
            <div className='figure'>
            <p> Zippy Waluse</p>
            <p>Software Developer</p>
            </div>
            </div>
            </div>
            <div className='buttomteam'>
            <div>
            <img src="/Images/Edna.jpeg" alt="Edna" className='Edna'/>
            <div className='figure'>
            <p> Edna Kesa</p>
            <p>Software Developer</p>
            </div>
           </div>
           <div>
            <img src="/Images/Scarlet.jpg" alt="Scarlet"  className='Scarlet'/>
            <div className='figure'>
            <p> Scarlet Alkeyo</p>
            <p>Software Developer</p>
            </div>
            </div>
            </div>
            </div>
            </div>
    )
}
export default Team