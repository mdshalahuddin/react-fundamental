import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)
  const setCountCart = () => {
    setCount(count + 1)
  };
  useEffect(() => {
    AOS.init();
  },[])
 
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts setCountCart={setCountCart}></AllProducts>
    </div>
  );
};

export default App;
