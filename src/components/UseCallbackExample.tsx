import React, {useState, useCallback, useMemo,useRef} from 'react';

type ReactOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void

const App = () => {
    const [input, setInput] = useState("")
    const changed: ReactOnChange = (e) => setInput(e.target.value)
    const onChange = useCallback(changed, [])
    const message = useRef("")

    //const InputWithLabelUseMemoVersion = useMemo(()=>(<InputWithLabelUseMemo onChange={onChange} />),[])
    return (
        <>
            <InputWithLabelReactMemo onChange={onChange} />
            <div>{message.current}</div>
            {/*<InputWithLabelNormal onChange={onChange} />*/}
            <Length input={input}/>
            <UseRefTest message={message} />
        </>
    )
}
/*
 Input withLabelは再描画する必要がないが、実際はonChangeをpropsとして渡されるため再描画されてしまう。
 関数をuseCallbackなしで渡されるとAppのステートが変わるたびに関数が再生成されるため、propsの更新とみなされ再描画される
 しかしuseCallbackありで渡されたとしてもやはり再描画される。

 1.propsの更新
 2.stateの更新
 3.親コンポーネントが再レンダリングされた時

 のうち一つでも満たすと再レンダリングされてしまうからだ。
 今回の場合親コンポーネント(App)のステートが代わり、再描画されている。
 再描画されないためにはuseCallbackの上にInputWithLabelにReact.memoやuseMemoを使って親の再描画を無視するようにしなければならない
 これをすると再描画にかかる時間が 0.6ms => ~0.1ms 程度になるため、有効に使うべきだ
 */
const InputWithLabelReactMemo = React.memo((prop: { onChange: ReactOnChange }) => {
    const {onChange} = prop


    console.log('!!!!rendering InputWithLabel!!!!')

    return (
        <>
            <span>Label: </span>
            <input type="text" onChange={onChange}/>
        </>
    )
})
/*
  UseRefは参照を子要素にわたすことができる。useStateと違い参照を変更することができる。
  以下のコンポーネントは親の'App'が再描画されるたびに!が増えていくが親が描画されたあとに追加されるため
  UseRefTest内の!のほうが一つ多くなる。
  ReactMemoでラップした場合 Refの内容が変わったとしても、再描画はされない。
 */
const UseRefTest = (prop: {message:React.MutableRefObject<string>}) =>{
    prop.message.current += '!'

    return (<>
        <span>{prop.message.current}</span>
    </>)
}
// const UseRefTest = React.memo((prop: {message:React.MutableRefObject<string>}) =>{
//     prop.message.current += '!'
//
//     return (<>
//         <span>{prop.message.current}</span>
//     </>)
// })

const InputWithLabelUseMemo = (prop: { onChange: ReactOnChange }) => {
    const {onChange} = prop

    console.log('!!!!rendering InputWithLabel!!!!')

    return (
        <>
            <span>Label: </span>
            <input type="text" onChange={onChange}/>
        </>
    )
}


const InputWithLabelNormal = (prop: { onChange: ReactOnChange }) => {
    const {onChange} = prop
    console.log('!!!!rendering InputWithLabel!!!!')

    return (
        <>
            <span>Label: </span>
            <input type="text" onChange={onChange}/>
        </>
    )
}

const Length = (props: { input: string }) => (
    <div>length: {props.input.length}</div>
)

export default App