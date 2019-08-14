import React from 'react';
import './App.css';
import Button from "./button.js";

import TextBoxes from './TextBox';

function App() {
  return (
    <div className="container mt-4">
      {/* <HugeImage /> */}
      <Button />
      <TextBoxes />
    </div >
  );
}

export default App;
