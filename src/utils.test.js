import { flatten, mapObject, range, linearScale } from './utils.js'


it('flatten utils', () => {
  expect(flatten([[0, 1], [2, 3, 4], [5], []])).toEqual([0, 1, 2, 3, 4, 5])
})

it('range utils', () => {
  expect(range(5)).toEqual([0, 1, 2, 3, 4])
})

it('mapObject utils', () => {
  expect(mapObject({"a": 1, "b": 2}, ([k, v]) => ([k+"_", v*2]))).toEqual({"a_": 2, "b_": 4})
})

it('linearScale utils', () => {
  expect(linearScale(0, 0, 1, 2, 10)).toEqual(2)
  expect(linearScale(1, 0, 1, 2, 10)).toEqual(10)
  expect(linearScale(0.5, 0, 1, 2, 10)).toEqual(6)
  expect(linearScale(1.5, 1, 2, -1, 1)).toEqual(0)
}
