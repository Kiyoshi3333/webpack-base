import {useEffect, useState,useCallback, useRef} from "react";

const Game = () => {
  const countRef =  useRef(0)
  const [someState,setSomeState] = useState(0)
  const [count,setCount] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
      console.log(countRef.current)
      //count.num +=1
      countRef.current++
      setCount(countRef.current)
    },1000)
  },[])

  const clicked = () =>{
    setTimeout(()=>{ alert(count)},6000)


  }
  return <>
    <div>{countRef.current}</div>
    <button onClick={clicked}>Click me</button>
  </>
}

export default Game