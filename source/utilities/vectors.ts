import { Cartesian } from './conversions'

export const add = (a: Cartesian, b: Cartesian) =>
    [a[0] + b[0], a[1] + b[1]] as Cartesian
