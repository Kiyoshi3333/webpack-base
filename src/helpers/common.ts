interface User {
  name: string,
  id: number
}
const users:User[] = [
  {name:'Yamada', id: 1},
  {name:'Kameda', id: 2},
  {name:'Sumida', id: 3},
]

const animals = ['cat', 'dog', 'mouse'] as const //すべての値をreadonlyにする
type Animal = typeof animals[number]


const getUsers = ():User[] => {
  return users
}

const addUser = (user:User) => {
  users.push(user)
}

const getUser = (id:number) => {
  return users[id]
}

const getFilteredList = (param:number):number => param
const getAnimal = (param:Animal) => param

const getUser2 = (index:number) => {
  const array:Array<number> = []
  const foo:number = 2
  array.push(index)
  return array
}

const getUser3 = (index:number): Array<number> => {
  const number2Array = getUser2(2)
  number2Array.push(1)
  return number2Array
}

const getUser4 = <T>(param:T): Array<T> => {
  return [param]
}
const str = new String(1)
const a = getUser4<String>(str)
console.log(a[0].indexOf('s'))

const b = getUser4(1)


const getUser5 = (index:number): User => {
  return users[index]
}
//console.log(b[0].indexOf(1))


interface Json{
  id: number,
  name: string
}

const fetchUser = async () => {
  const user = await fetch('/somejoson.json').then(data=>data.json())
  const name = user.props
  return name
}

function getMember7(){

}

