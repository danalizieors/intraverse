export type Cartesian = [number, number]
export type Polar = [number, number]

export const toCartesian = ([radius, angle]: Polar) =>
    [radius * Math.cos(angle), radius * Math.sin(angle)] as Cartesian

export const toPolar = ([x, y]: Cartesian) =>
    [Math.sqrt(x * x + y * y), Math.atan2(y, x)] as Polar

export const toRadians = (degrees: number) => (degrees / 180) * Math.PI
export const toDegrees = (radians: number) => (radians / Math.PI) * 180
