import React, { useState, useEffect } from 'react'

import './App.css';

function App() {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    return () => {
      
    };
  }, []);


  return (
    <div className="App">
      <p>
        {counter}
      </p>
      <button onClick={()=>{
        let count
        count= counter +1;
        setcounter(count)
      }}>Click me</button>



      
    </div>
  );
}

export default App;
