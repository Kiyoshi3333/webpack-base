import { MyError } from '../errors'
// <T> and <T extends Object> are equivalent.
export function shallowCopy<T extends object>(obj: T) {
  const result = {} as T
  for (const key in obj) {
    result[key] = obj[key]
  }
  return result
}

export function sum(a = 0, b = 0) {
  return a + b
}

export const asyncFunc = (num: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 1) reject(new MyError(1, 'Oops!'))
      else resolve(num)
    }, 100)
  })
}

export const syncFunc = () => {
  throw new MyError(1, 'error')
}

export function* generatorAsync<T>(callback: AnonymousFunction<T>) {
  yield* callback()
}

export function delay<T>(milliseconds: number, message: T): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(message)
    }, milliseconds)
  })
}

export const sleep = (wait: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, wait))
}

export function asyncCallback(callback: () => Promise<number>): void {
  callback()
    .then((data) => {
      console.warn(data)
    })
    .catch((e) => {
      console.error(e)
    })
}
/*
 * fafa
 * fafa
 */

// interface User {
//   name: string,
//   id: number
// }
// const users:User[] = [
//   {name:'Yamada', id: 1},
//   {name:'Kameda', id: 2},
//   {name:'Sumida', id: 3},
// ]
//
// const animals = ['cat', 'dog', 'mouse'] as const //すべての値をreadonlyにする
// type Animal = typeof animals[number]
//
//
// const getUsers = ():User[] => {
//   return users
// }
//
// const addUser = (user:User) => {
//   users.push(user)
// }
//
// const getUser = (id:number) => {
//   return users[id]
// }
//
// const getFilteredList = (param:number):number => param
// const getAnimal = (param:Animal) => param
//
// const getUser2 = (index:number) => {
//   const array:Array<number> = []
//   const foo:number = 2
//   array.push(index)
//   return array
// }
//
// const getUser3 = (index:number): Array<number> => {
//   const number2Array = getUser2(2)
//   number2Array.push(1)
//   return number2Array
// }
//
// const getUser4 = <T>(param:T): Array<T> => {
//   return [param]
// }
// const str = new String(1)
// const a = getUser4<String>(str)
// console.log(a[0].indexOf('s'))
//
// const b = getUser4(1)
//
//
// const getUser5 = (index:number): User => {
//   return users[index]
// }
// //console.log(b[0].indexOf(1))
//
//
// interface Json{
//   id: number,
//   name: string
// }
//
// const fetchUser = async () => {
//   const user = await fetch('/somejoson.json').then(data=>data.json())
//   const name = user.props
//   return name
// }
//
// function getMember7(){
//   console.log('fafa')
// }
//
