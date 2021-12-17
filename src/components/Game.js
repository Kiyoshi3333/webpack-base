import {useEffect, useState,useCallback, useRef} from "react";

const Game = () => {
  const countRef =  useRef(0)
  const [count,setCount] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
      countRef.current++
      setCount(countRef.current)
    },1000)
  },[])

  return <>
    <div>{count}</div>
  </>
}

export default Game