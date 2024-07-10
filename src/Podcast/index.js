import React from 'react';
import './index.css';


// PlayButton Component
const PlayButton = () => {
    const playButtonStyle = {
        width: '100px', // Adjust size as needed
        height: '100px', // Adjust size as needed
        backgroundColor: '#964B00',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        margin: '10px', // Add some space around the button
        
    };

};

// InteractiveBox Component
const InteractiveBox = () => {
    const playButtonStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50px',
        height: '50px',
        backgroundImage: `url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2z'/%3E%3C/svg%3E)`,
        backgroundSize: 'cover',
        opacity: 1, // Make the play button always visible
        transition: 'opacity 0.3s ease',
        backgroundColor:'white'
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
            <p className='box-text'>"dive into the world with us"</p>
            <div style={playButtonStyle}></div>
        </div>
    );
};

// Podcast Component
const Podcast = () => {
    return (
        <div className='title'>
            <h1 className='title'>Podcast</h1>
            <br />
            
            <p className='dynamic-text'>Discover the dynamic podcasts we have in store for you</p>
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
