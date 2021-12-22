import React, {useState, useCallback, useMemo} from 'react';

type ReactOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void

const App = () => {
    const [input, setInput] = useState("")
    const handler: ReactOnChange = (e) => setInput(e.target.value)
    const onChange = useCallback(handler, [])
    //const onChange = (e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)
    // const withoutMemo = useMemo(()=>(<InputWithLabelUseMemo onChange={onChange} />),[])
    return (
        <>
            <InputWithLabelReactMemo onChange={onChange}/>
            <Length input={input}/>
        </>
    )
}

//Input withLabelにはstateがないため、再描画されないように思うが、実際はonChangeをpropsとして渡されるため再描画されてしまう。
//関数をuseCallbackなしで渡されるとAppのステートが変わるたびに関数が再生成されるため、propsの更新とみなされ再描画される
//しかしuseCallbackありで渡されたとしてもやはり再描画される。
/*
 1.propsの更新
 2.stateの更新
 3.親コンポーネントが再レンダリングされた時
 のうち一つでも満たすと再レンダリングされてしまうからだ。
 今回の場合親コンポーネント(App)のステートが代わり、再描画されている。
 再描画されないためにはuseCallbackの上にInputWithLabelにReact.memoやuseMemoを使って親の再描画を無視するようにしなければならない
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


const InputWithLabelWithOnChange = () => {
    const [input, setInput] = useState("")
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value), [])

    console.log('!!!!rendering InputWithLabel!!!!')

    return (
        <>
            <span>Label: </span>
            <input type="text" onChange={onChange}/>
            <Length input={input}/>
        </>
    )
}

const Length = (props: { input: string }) => (
    <div>length: {props.input.length}</div>
)

export default App