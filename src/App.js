
import { useState } from 'react';
import './App.css';
import Button from './Button';
import Page from './Page';

function App() {
  const[containerColor, setContainerColor] = useState("White");
  function handleColor(color) {
    setContainerColor(color);
  }
  return (
    <div >
    
     <Button handleColor = {handleColor}/>
     <Page containerColor= {containerColor }/>
      
    </div>
  );
}

export default App;
