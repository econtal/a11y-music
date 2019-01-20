
/**
 * @param {int} n
 * @returns {array} - array of int [0, ..., n-1]
 */
export const range = (n) => [...Array(n).keys()]

/**
 * @param {array} - array of arrays of objects
 * @returns {array} - flatten array of objects
 */
export const flatten = (arrays) => [].concat(...arrays)

/**
 * @param {object} obj
 * @param {function} func - function [key, value] => [newKey, newValue]
 * @returns {object} - object from mapped key/values pairs
 */
export const mapObject = (obj, func) => (
  Object.assign(...Object.entries(obj).map(func).map(([k, v]) => ({[k]: v})))
)

/**
 * scale a value from [fromMin, fromMax] to [toMin, toMin]
 */
export const linearScale = (value, fromMin, fromMax, toMin, toMax) => (
  toMin + (value - fromMin) * (toMax - toMin) / (fromMax - fromMin)
)
