import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)
  const [multiplier, setMult] = useState(1)

  const updateCount = () => { setCount(count + multiplier) }

  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className='samosa' src='.\src\assets\samosa-img.png' onClick={updateCount}></img>
      </div>

      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed 👯‍♀️</h3>
        </div>
      </div>

    </div>
  )
}

export default App
