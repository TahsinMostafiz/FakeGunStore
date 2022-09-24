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
      <Navbar count={count}></Navbar>
      <AllGun increaseCount={increaseCount}></AllGun>
    </div>
  );
}

export default App;
