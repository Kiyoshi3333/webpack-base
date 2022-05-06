import React, {
  useEffect,
  useState,
  useRef,
  ReactElement,
  forwardRef,
  RefObject,
  MutableRefObject,
} from 'react'
import styled from 'styled-components'
import ForwardRefSelect from './ForwardRefSelect'
import Form from './Form'
import Intersection from './Intersection'
type GridProps = {
  rows: number
  cols: number
}
const GridContainer = styled.div`
  display: grid;

  // grid-template:  100px 1fr / 50px 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  grid-template-columns: max-content 1fr;
  grid-auto-columns: min-content;
  height: 500px;
  width: 500px;
  column-gap: 10px;
  row-gap: 1em;
`
const GridItem = styled.div`
  text-align: center;
  background-color: orange;
  border: 1px solid red;
`

const Box1 = styled.div`
  height: 50px;
  background-color: red;
`
const Box2 = styled.div`
  background-color: yellow;
`

const Box3 = styled.div`
  background-color: yellow;
`

const Box4 = styled.div`
  background-color: yellow;
`

const Box5 = styled.div`
  background-color: yellow;
`
const Grid = (props: GridProps) => {
  const [gridItems, setGridItems] = useState<ReactElement[]>([])

  const ref = useRef<HTMLSelectElement>(null)

  const options = [
    { name: 'Hello1', value: 'world1' },
    { name: 'Hello2', value: 'world2' },
    { name: 'Hello3', value: 'world3' },
    { name: 'Hello4', value: 'world4' },
    { name: 'Hello5', value: 'world5' },
  ]
  useEffect(() => {
    console.log(ref.current?.clientHeight)
  }, [])
  return (
    <>
      <GridContainer className="bg-red">
        <Box1 className="border-red-500">
          <div>Hello</div>
        </Box1>
        <Box2 className="border-red-500"></Box2>
        <ForwardRefSelect name={'select'} options={options} ref={ref} />
        {/*<Box4></Box4>*/}
        {/*<Box5></Box5>*/}
      </GridContainer>
      <Intersection />
    </>
  )
}

export default Grid
