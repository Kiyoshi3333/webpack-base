import React from 'react'

type AnonymousFunction<T> = () => T[]
type AnonymousFunctionAsync<T> = () => Promise<any>
type ReactOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void
type ReactOnFormChange = (e: React.ChangeEvent<HTMLFormElement>) => void
