import { useEffect, useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Şeyma");

  useEffect(() => {
    console.log("component mount edildi");
   const interval = setInterval(() => {
        setNumber((n) => n+1)  //buradaki n numberın n'i aslında
    }, 1000);
    return () => clearInterval(interval);
  }, []);




  useEffect(() => {
    console.log("number güncellendi");
  }, [number]);



  useEffect(() => {
    console.log("name değişti");
  }, [name]);



  return (
    <>
      <h1>{number}</h1>

      <button onClick={() => setNumber(number + 1)}>Click</button>
      <br />
      <h1>{name}</h1>

      <button onClick={() => setName("Sudenur")}>Click</button>
      <button onClick={() => setName("Esra")}>Click-2</button>
      <button onClick={() => setName("Şeyma")}>İlk durum</button>
    </>
  );
}

export default Counter;
