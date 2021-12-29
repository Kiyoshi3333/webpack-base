import React, { useState, useCallback, useRef, memo } from 'react'
import { Input, Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { shallowCopy } from '../helpers/common'

type ReactOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void
type ReactOnFormChange = (e: React.ChangeEvent<HTMLFormElement>) => void

const App = () => {
  const [input, setInput] = useState('')
  const changed: ReactOnChange = (e) => setInput(e.target.value)
  const onChange = useCallback(changed, [])
  const message = useRef('')
  const [obj, setObj] = useState({})

  const res = shallowCopy({ a: 'fafafafafa' })

  console.warn(res)

  const onFormChange = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    const {
      target: { value, name },
    } = e

    setObj((obj) => ({ ...obj, [name]: value }))
  }, [])

  //const InputWithLabelUseMemoVersion = useMemo(()=>(<InputWithLabelUseMemo onChange={onChange} />),[])
  return (
    <>
      <Container>
        <Row>
          <Col xs={4}>
            <InputWithLabelReactMemo
              onChange={onChange}
              onFormChange={onFormChange}
            />
            <div className="text-white">{message.current}</div>
            {/*<InputWithLabelNormal onChange={onChange} />*/}
            <Length input={input} />
            <UseRefTest message={message} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
/*
 Input withLabelは再描画する必要がないが、実際はonChangeをpropsとして渡されるため再描画されてしまう。
 関数をuseCallbackなしで渡されるとAppのステートが変わるたびに関数が再生成されるため、propsの更新とみなされ再描画される
 しかしuseCallbackありで渡されると、関数は再生性されないが、それでもやはり再描画される。

 1.propsの更新
 2.stateの更新
 3.親コンポーネントが再レンダリングされた時

 のうち一つでも満たすと再レンダリングされてしまうからだ。
 今回の場合親コンポーネント(App)のステートが代わり、再描画されている。
 再描画されないためにはuseCallbackに加えてInputWithLabelにReact.memoやuseMemoを使って親の再描画を無視するようにしなければならない
 これをすると再描画にかかる時間が 0.6ms => ~0.1ms 程度になるため、有効に使うべきだ
 Memo化してもonChangeなどのイベントは当然取れるがStateを更新してしまえば再描画されるため、Memo化の意味がなくなる
 */
const InputWithLabel = ({
  onChange,
  onFormChange,
}: {
  onChange: ReactOnChange
  onFormChange: ReactOnFormChange
}) => {
  // const InputWithLabelReactMemo = React.memo((prop: { onChange: ReactOnChange, onFormChange:ReactOnFormChange }) => {
  //const {onChange,onFormChange} = prop
  const [count, setCount] = useState(0)
  return (
    <>
      <Form className="form mt-2" onChange={onFormChange}>
        <FormGroup>
          <h2 className="text-white">Tailwind</h2>
          <span>Label: {count}</span>
          <Input className="" type="text" name="name" onChange={onChange} />
        </FormGroup>
      </Form>
    </>
  )
}
const InputWithLabelReactMemo = memo(InputWithLabel)
/*
  UseRefは参照を子要素にわたすことができる。useStateと違いその値をsetStateなしで変更することができる。
  以下のコンポーネントは親の'App'が再描画されるたびに!が増えていくが親が描画されたあとに追加されるため
  UseRefTest内の!のほうが一つ多くなる。
  ReactMemoでラップした場合 Refの内容が変わったとしても、再描画はされない。
 */
const UseRefTest = (prop: { message: React.MutableRefObject<string> }) => {
  prop.message.current += '!'

  return (
    <>
      <span>{prop.message.current}</span>
    </>
  )
}
const UseRefTestMemo = memo(UseRefTest)

function getNameLength(name: string) {
  return name.length
}

const InputWithLabelNormal = (prop: { onChange: ReactOnChange }) => {
  const { onChange } = prop
  console.warn('!!!!rendering InputWithLabel!!!!')
  return (
    <>
      <span>Label: </span>
      <input type="text" onChange={onChange} />
    </>
  )
}

const Length = (props: { input: string }) => (
  <div>length: {props.input.length}</div>
)

export default App
