import './App.css';
import React, { useState } from 'react';
import Button from './Button';



function App() {

  const [result, setResult] = useState('');
  const [query, setQuery] = useState('');

  const names = ['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/'];
  

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={query} readOnly/>
      <div>{result}</div>
      <div className='container'>

        {names.map((name)=>{ 
          return <Button key={name} name={name} query={query} setQuery={setQuery} setResult={setResult}/>
          })
        }
      
      
      </div>
    </div>
    );
}

export default App;
