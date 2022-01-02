/*
 * @types以下のファイルが自動で読み込まれるのはimport文などが無いときだけ。なぜかは不明
 * @types/*d.ts だと export や declare がいらない importは必要 ただし const foo にはexport/declareが必要になる上に
 *  'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.がでる
 */
import React from 'react'

type ReactOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void
export type ReactOnFormChange = (e: React.ChangeEvent<HTMLFormElement>) => void
const animals = ['cat', 'dog', 'mouse'] as const //すべての値をreadonlyにする
type Animal = typeof animals[number]
