import React from 'react';
import './App.css';
import Button from "./button.js";

import TextBoxes from './TextBox';
import Converter from './Converter';

function App() {
  return (
    <div className="container mt-4">
      {/* <HugeImage /> */}
      <Button />
      <TextBoxes />
      <Converter />
    </div >
  );
}

export default App;
