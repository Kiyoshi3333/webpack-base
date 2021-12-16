import {useState} from "react";

const Game = () => {
  const [count,setCount] = useState(0)
  return (<div>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}></button>
  </div>)
}

export default Game