/*
 * @types以下のファイルが自動で読み込まれるのはimport文などが無いときだけ。import 文があると通常のモジュールと同等に扱われてしまう
 * 回避するにはimport('react').ChangeEventのように書く
 *
 * @types/*d.tsでconstを定義すると
 *  'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.がでる
 */

type ReactOnChange = (e: import('react').ChangeEvent<HTMLInputElement>) => void
type ReactOnFormChange = (
  e: import('react').ChangeEvent<HTMLFormElement>
) => void
const animals = ['cat', 'dog', 'mouse'] as const //すべての値をreadonlyにする
type Animal = typeof animals[number]
type AnonymousFunction<T> = () => T[]
type AnonymousFunctionAsync<T> = () => Promise<any>
type Member = {
  id: number
  name: string
}
