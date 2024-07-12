import React from 'react';
import Podcast from "./Podcast";
import Button from './Videos'; // Assuming this is the correct path for your Button component
import Homepage from './Homepage';
import Identity from "./Components/BlogPage"; // Adjusted path based on your structure
import './App.css'; // Importing global styles

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
