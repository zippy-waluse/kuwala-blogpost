import React from 'react';
import Podcast from "./Podcast";
import Button from './Videos';

const App = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return (
    <div>
      <h1>Explore Our Offerings</h1>
      <Button videoUrl={videoUrl} />
      <Button/>
      <Podcast /> 
    </div>
  );
};

export default App;
