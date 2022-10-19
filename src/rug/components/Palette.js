import {useState} from 'react'
import {send} from "../socketApi"
function Palette() {
     const [first, setfirst] = useState([])
  return (
    <div className='palette'>Palette
    <input  type="color"/>
    <button>Click</button>
    </div>
  )
}

export default Palette