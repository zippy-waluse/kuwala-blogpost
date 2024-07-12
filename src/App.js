import React from 'react';
import Podcast from "./Podcast";
import Button from './Videos'; // Assuming this is the correct path for your Button component
import Homepage from './Homepage';
import Identity from "./Components/BlogPage"; // Adjusted path based on your structure
import './App.css'; // Importing global styles

function App() {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Example video URL

  return (
    <div className="App">
      <Homepage />
      <Podcast />
      <Button />
      <Button videoUrl={videoUrl} />
      <Identity />

    </div>
  );
}

export default App;
