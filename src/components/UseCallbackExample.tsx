import React, {
  useState,
  useCallback,
  useRef,
  useMemo,
  memo,
  useEffect,
} from 'react'
import { shallowCopy, asyncFunc } from '../helpers/common'

type ReactOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void
type ReactOnFormChange = (e: React.ChangeEvent<HTMLFormElement>) => void
type user = { id: number; name: string; createdAt: string }
type TransformUser = (user: user) => user & { updatedAt: string }

const transformUser: TransformUser = (user) => {
  return {
    ...user,
    updatedAt: new Date().toISOString(),
  }
}

const App = () => {
  const [input, setInput] = useState('')
  const changed: ReactOnChange = (e) => setInput(e.target.value)
  const onChange = useCallback(changed, [])
  const message = useRef('')
  const [obj, setObj] = useState({})
  const [users, setUsers] = useState<user[]>([])
  const listUsers = useMemo(
    () =>
      users.map((item) => {
        const transformed = transformUser(item)
        return (
          <div key={item.id} className="mt-2 first:mt-0 odd:bg-gray-200 p-2">
            <div>
              {transformed.name} {transformed.updatedAt}
            </div>
          </div>
        )
      }),
    [users]
  )

  const onFormChange = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    const {
      target: { value, name, type, checked },
    } = e
    let storeValue: string | boolean
    if (type === 'checkbox') {
      storeValue = checked
    } else {
      storeValue = value
    }
    setObj((obj) => ({ ...obj, [name]: storeValue }))
  }, [])
  useEffect(() => {
    if (users.length) return
    const f = async () => {
      const res = await fetch(
        'https://61cc72dc198df60017aec0a7.mockapi.io/api/users'
      )
      return await res.json()
    }
    f().then((data) => {
      setUsers(data)
    })
  }, [])
  //const InputWithLabelUseMemoVersion = useMemo(()=>(<InputWithLabelUseMemo onChange={onChange} />),[])
  return (
    <>
      <div className="md:container md:mx-auto p-2">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div>
            <div>{JSON.stringify(obj)}</div>
            <details className="bg-white open:bg-gray-100">
              <summary className="text-white text-main">Details</summary>
              Something small enough to escape casual notice.
            </details>
          </div>
          <div>
            <InputWithLabelReactMemo
              onChange={onChange}
              onFormChange={onFormChange}
            />
            <div className="">{message.current}</div>
            <div>{listUsers}</div>
            {/*<InputWithLabelNormal onChange={onChange} />*/}
            <Length input={input} />
            <UseRefTest message={message} />
          </div>
        </div>
      </div>
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
  //const InputWithLabel = React.memo((prop: { onChange: ReactOnChange, onFormChange:ReactOnFormChange }) => {
  //const {onChange,onFormChange} = prop

  return (
    <>
      <form className="form text" onChange={onFormChange}>
        <div className="p-0 grid xl:grid-cols-2">
          <h2 className="">Tailwinds</h2>
          <div className="p-0 grid grid-cols-2 max-w-xs	">
            <label htmlFor="name">Name:</label>
            <input
              className="ml-3 bg-input p-1 text-lg border border-purple-100 hover:text-white hover:bg-purple-100"
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input
              className="ml-3 bg-input p-1 text-lg border border-purple-200 hover:text-white hover:bg-purple-100"
              type="email"
              name="email"
            />
          </div>
          <div>
            <input type="checkbox" name="agree" value={1} />
          </div>
        </div>
      </form>
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

const Length = (props: { input: string }) => (
  <div>length: {props.input.length}</div>
)

export default App
