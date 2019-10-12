import React from 'react';
import Wheel from "./Wheel";
import './App.css';

function App() {
    const places = ["1","2","3"];
  return (
    <div className="App">
      <Wheel items={places} />
    </div>
  );
}

export default App;
