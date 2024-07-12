<<<<<<< HEAD
import './App.css';
import Team from './Team';
import Teamcv from './TeamCv';

const App = () =>{
  return(
    <div>
       <Teamcv/>
        {/* <Team/> */}
    </div>
  )
}

export default App;
=======
import React from 'react';
import Podcast from "./Podcast";
import Button from './Videos'; // Assuming this is the correct path for your Button component
import Homepage from './Homepage';
import Identity from "./Components/BlogPage"; // Adjusted path based on your structure
import './App.css'; // Importing global styles
>>>>>>> 39f5b915cdaf4b48ff85bf6b8cb023a8f1926b80

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
