import{ useState}from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
        <h1 style={{marginLeft:"50%"}}>{count}</h1>
        <button style={{marginLeft:"35%"}} onClick={() => setCount( count -1)} >Decrease</button>
      <button style={{marginLeft:"25%"}}  onClick={() => setCount( count +1)} >Increase</button>
   
      
    </div>
  )
}

export default Counter
