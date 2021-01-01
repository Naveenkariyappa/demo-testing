import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App" data-test="component-app">
      <h1 data-test="component-counter"><span data-test="component-count">{count}</span></h1>
      <button onClick={()=>setCount(count+1)} data-test="component-button"></button>
    </div>
  );
}

export default App;