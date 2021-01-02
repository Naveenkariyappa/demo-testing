import React, {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState(false)
  
  const increment = () => {
    error && setError(false) 
    setCount(count+1)
  }

  const decrement = () => {
    if(count === 0 ){
      setError(true)
    }else{
      setCount(count - 1 )
    }
  }

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="component-counter">count <span data-test="component-count">{count}</span></h1>
      <div data-test="error-message" className={`error ${error ? '' : 'hidden'}`}>
        The counter cannot go below 0
      </div>
      <button onClick={increment} data-test="component-button-inc">Increment</button>
      <button onClick={decrement} data-test="component-button-dec">decrement</button>
    </div>
  );
}

export default App;