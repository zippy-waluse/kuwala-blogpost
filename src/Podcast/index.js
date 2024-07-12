import React from 'react';
import './index.css';


const PlayButton = () => {
  

};


const InteractiveBox = () => {
    const playButtonStyle = {
        position: 'absolute',
        backgroundImage: `url(data:image/svg+xml,%3Csvg xmlns='https://youtu.be/1e5x6-80c_Y?si=A7a1MEPFcQhgpUI_' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2z'/%3E%3C/svg%3E)`,
        backgroundColor:'#d87715'
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
