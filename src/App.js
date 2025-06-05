import { useState } from "react"

const App = ()=> {
const [count,setCount] = useState(0)

const inc = ()=>setCount(porevState => porevState + 1)

  return (
    <div>
      {count}
      <button onClick={inc}>
        Inc
      </button>
    </div>
  )
}

export default App