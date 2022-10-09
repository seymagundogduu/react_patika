import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Header from "./calismalar/memoization/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  },[]);

  // const data = useMemo(() => {
  //   return calculateObject(number);
  // }, [number]);
  // const data = calculateObject();

  return (
    <div className="App">
      <Header increment={increment} />
      <hr />

      <h1>{number}</h1>
      {/* <button onClick={() => setNumber(number + 1)}>Click</button> */}

      <hr/>
      <input value={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}

// function calculateObject(number){
//   console.log("Calculating..");

//   for(let i =0; i< 10000 ; i++) {}
//   console.log("Calculating completed...");
//   return{ name: "Şeyma" , number};
// }

export default App;
