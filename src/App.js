import Palette from "./rug/components/Palette";
import { useEffect } from "react";
import "./rug/rug.css"
import {init} from "./rug/socketApi"

function App() {
  useEffect(() => {
    init();
  }, []);
 

  return (
    <div className="App">
  
   
   <Palette/>
    
    </div>
  );
}
export default App;
