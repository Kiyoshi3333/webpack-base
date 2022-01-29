import styled from 'styled-components'
import React, { useEffect, useRef } from 'react'

const Wrapper = styled.div`
  width: 90vw;
  background-color: green;
  margin: 0 auto;
  height: 2500px;
`

const Inner1 = styled.div`
  width: 100%;
  background-color: grey;
  height: 250px;
`

const Inner2 = styled.div`
  width: 100%;
  background-color: blue;
  height: 250px;
`
const NegativeMarginWrapper = styled.div`
  
  background-color: blue;
  height: 250px;
  width: 200px;
`
const NegativeMargin = styled.div`
  
  background-color: blue;
  height: 250px;
  display:flex;
  margin-right: -50px;
  margin-left: -50px;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Col = styled.div`
  max-width: 50%;
  padding: 0 50px;
  flex-basis: 50%;
  flex-grow: 0;
  flex-shrink: 0;
  height: 250px;
  position: relative;
  width: 100%;
  text-size-adjust: 100%;
  text-align: left;
`


const Intersection = () => {
  const ref = useRef()

  useEffect(() => {
    let options = {
      root: document.documentElement,
      rootMargin: '0px',
      threshold: [0.25, 0.5],
    }
    let observer = new IntersectionObserver((e) => {
      console.warn(e, 'intersection')
    }, options)
    console.log(ref.current)
    observer.observe(ref.current)
  }, [])
  return (
    <Wrapper>
      <Inner1></Inner1>
      <Inner2 ref={ref}></Inner2>
      <NegativeMarginWrapper>
        <NegativeMargin>
          <Col><div>fafa</div></Col><Col>fafafa</Col>
        </NegativeMargin>
      </NegativeMarginWrapper>

    </Wrapper>
  )
}

export default Intersection
