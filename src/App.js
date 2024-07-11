import React from 'react';
import Podcast from "./Podcast";
import Button from './Videos';

const App = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return (
    <div>
      <Podcast /> 
      <br></br>
      <br></br>
      <br></br>
      <Button/>

      <Button videoUrl={videoUrl} />


    </div>
  );
};

export default App;
