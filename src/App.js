import React from 'react';
import './App.css'; 
import Homepage from './Homepage';
import Podcast from './Podcast';
import Button from './Videos'; 
import Identity from "./Components/BlogPage"; 

function App() {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
  return (
    <div className="App">
      <Homepage />
      <Podcast />
      <Button /> {/* Default Button instance */}
      <Button videoUrl={videoUrl} /> {/* Button instance with videoUrl prop */}
      <Identity />
    </div>
  );
}

export default App;
