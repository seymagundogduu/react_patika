import {  useState } from "react";
import './App.css';
import Counter from './components/Counter';




function App() {
  const [isVisible, setIsVisible] = useState(true);
  return <div className='App'>
  {isVisible ? <Counter /> : "Hatalı kulanım" }
<br/>
<button  onClick={() => setIsVisible(!isVisible)}> Toogle</button>
  </div>
  

 
}

export default App;
