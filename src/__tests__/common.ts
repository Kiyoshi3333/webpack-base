import { sum, asyncFunc, syncFunc, shallowCopy } from '../helpers/common'
import { MyError } from '../errors'

test('basic', () => {
  expect(sum()).toBe(0)
})

test('basic again', () => {
  expect(sum(1, 2)).toBe(3)
})
test('Sync error test', () => {
  expect(syncFunc).toThrow(MyError)
})
test('Async error test', () => {
  expect(asyncFunc(4)).rejects.toThrow(MyError)
})
test('Copy object properly', () => {
  const object = { a: 1, b: '2' }
  const copied = shallowCopy(object)
  expect(copied.a).toBe(1)
  expect(copied.b).toBe('2')
})
