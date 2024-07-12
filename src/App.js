import React from 'react';
import Podcast from "./Podcast";
import Button from './Videos'; 
import Homepage from './Homepage';
import Identity from "./Components/BlogPage"; 
import './App.css'; 
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Podcast />
      <Button />
      <Button videoUrl={videoUrl} />
      <Identity />
      <Footer/>

    </div>
  );
}

export default App;
