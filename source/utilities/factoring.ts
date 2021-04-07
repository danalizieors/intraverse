import { reduce } from 'ramda'

const gcd: (a: number, b: number) => number = (a, b) => (b ? gcd(b, a % b) : a)

const lcm: (a: number, b: number) => number = (a, b) => (a * b) / gcd(a, b)

export const greatestCommonDivisor = reduce(gcd, 0)

export const leastCommonMultiple = reduce(lcm, 1)
