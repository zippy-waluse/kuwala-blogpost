import React from 'react';
import './module.css'
import './index.css';

const InteractiveBox = () => {
    return (
        <div className='interactiveBox'> 
            <p className="box-text">"videos coming soon stay tuned"</p>
            <div></div>
        </div>
    );
};

const Podcast = () => {
    return (
        <div className='title'>
            <h1 className="title">Podcast</h1>
            <br />
            <p className="dynamic-text">Our videos coming soon</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                {[...Array(3)].map((_, index) => (
                    <InteractiveBox key={index} />
                ))}
            </div>
        </div>
    );
};

export default Podcast;
