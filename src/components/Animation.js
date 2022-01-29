import styled from 'styled-components'
import Select from './ForwardRefSelect'
import { useState } from 'react'

const Circle = styled.div`
    background-color: #1766aa;
    color: #fff;
    margin: auto;
    margin-left: 0;
    border: 5px solid #333;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:20%;
    flex-direction: column;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: ${prop => prop.fillmode};
    animation-name: ${prop => prop.animationName};
    animation-play-state:  ${prop => prop.animate};
    
`

const Animation = () => {
  const [animated, setAnimated] = useState('paused')
  const [fillMode, setFillMode] = useState('both')
  const [animationName, setAnimationName] = useState('slide')
  const animationOptions = [
    { name: 'Paused', value: 'paused' },
    { name: 'Running', value: 'running' }
  ]
  const fillModeOptions = [
    { name: 'None', value: 'none' },
    { name: 'Forwards', value: 'forwards' },
    { name: 'Backwards', value: 'backwards' },
    { name: 'Both', value: 'both' },
  ]
  const animationChanged = (e) => {
    setAnimated(e.target.value)
  }

  const fillModeChanged = (e) => {
    setFillMode(e.target.value)
  }
  const reset = () => {
    setAnimationName('none')
    setTimeout(()=>{
      setAnimationName('slide')
    },1)
  }
  return (
    <>
      <div className="grid px-4">
        <Circle animate={animated} fillmode={fillMode}  animationName={animationName}/>
        <label className="">Running state</label>
        <Select name='animation' options={animationOptions} onChange={animationChanged} />
        <label>Fill mode</label>
        <Select name='fillmode' options={fillModeOptions} onChange={fillModeChanged} />
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default Animation
