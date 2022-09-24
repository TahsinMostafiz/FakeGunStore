import { useState } from 'react';
import './App.css';
import AllGun from './Components/Navbar/AllGun/AllGun';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <div className='container mx-auto'>
        <Navbar count={count}></Navbar>
        <AllGun increaseCount={increaseCount}></AllGun>
      </div>
    </div>
  );
}

export default App;
