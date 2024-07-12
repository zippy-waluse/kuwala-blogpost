import React from 'react';
import './index.css';


const PlayButton = () => {
  

};


const InteractiveBox = () => {
    const playButtonStyle = {
    };

    const interactiveBoxStyle = {
        display: 'inline-block',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        height: '200px',
        position: 'relative',
        cursor: 'pointer',
        backgroundColor:'#964B00'
    };

    return (
        <div style={interactiveBoxStyle}>
            <p className='box-text'>"videos coming soon stay tuned"</p>
            <div style={playButtonStyle}></div>
        </div>
    );
};

const Podcast = () => {
    return (
        <div className='title'>
            <h1 className='title'>Podcast</h1>
            <br />
            
            <p className='dynamic-text'>Our videos coming soon</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                {[...Array(3)].map((_, index) => (
                    <InteractiveBox key={index} />
                ))}
                <PlayButton />
            </div>

            
        </div>
    );
};

export default Podcast;
