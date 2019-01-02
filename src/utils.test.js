import { flatten, mapObject, range } from './utils.js'


it('flatten utils', () => {
  expect(flatten([[0, 1], [2, 3, 4], [5], []])).toEqual([0, 1, 2, 3, 4, 5])
})

it('range utils', () => {
  expect(range(5)).toEqual([0, 1, 2, 3, 4])
})

it('mapObject utils', () => {
  expect(mapObject({"a": 1, "b": 2}, ([k, v]) => ([k+"_", v*2]))).toEqual({"a_": 2, "b_": 4})
})
