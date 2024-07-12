import React from 'react';
import Podcast from "./Podcast";
import Button from './Videos'; // Assuming this is the correct path based on your initial import statement
import Homepage from './Homepage';
import Identity from "./Components/BlogPage"; // Assuming this is the correct path based on your initial import statement
import './App.css'; // Removed duplicates

function App() {
  const videoUrl = "your_video_url_here"; // Define videoUrl here or pass it as a prop if needed

  return (
    <div className="App">
      <Homepage />
      <Podcast />
      <Button />
      <Button videoUrl={videoUrl} /> {/* Adjusted based on your intention */}
      <Identity />
      <Footer/>
    </div>
  );
}

export default App;
