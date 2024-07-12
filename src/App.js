import React from 'react';
import './App.css'; 
import Homepage from './Homepage';
import Podcast from './Podcast';
import Button from './Videos'; 
import Identity from "./Components/BlogPage"; 
import Footer from './Footer';

function App() {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
  return (
    <div className="App">
      <Homepage />
      <Podcast />
      <Button /> 
      <Button videoUrl={videoUrl} /> {}
      <Identity />
      <Footer/>
    </div>
  );
}

export default App;
