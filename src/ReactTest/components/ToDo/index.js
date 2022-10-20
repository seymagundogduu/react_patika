import {useState} from 'react'


const defaultItems = [
    {
        name: "Item a",
    },
    {
        name: "Item b",
    },
    {
        name: "Item c",
    },
]


function ToDo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);
  return (
    <div>
      <label> Text <input value={text} onChange={(e) => setText(e.target.value)}/></label>
    
      <button onClick={() => setItems((prev) => [...prev, {name: text}])} >Add</button>

      <br/>
      {
        items && items.map((items,key) => (
            <div key={key}> {items.name}</div>
        ))
      }

    </div>
  )
}

export default ToDo
