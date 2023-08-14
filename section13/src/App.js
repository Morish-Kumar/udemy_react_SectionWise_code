import React, { useState } from 'react';


import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';


function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = ()  => {
    console.log("APP RUNNING");
    setShowParagraph(!showParagraph);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      {/* {showParagraph && <p>This is Paragraph</p>} */}
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
     
    </div>
  );
}

export default App;
