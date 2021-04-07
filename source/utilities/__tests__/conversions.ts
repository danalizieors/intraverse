import { pipe } from 'ramda'
import {
    Cartesian,
    Polar,
    toCartesian,
    toDegrees,
    toPolar,
    toRadians,
} from '../conversions'

const expectToBeCloseTo = (
    [a, b]: [number, number],
    [expectedA, expectedB]: [number, number],
) => {
    expect(a).toBeCloseTo(expectedA)
    expect(b).toBeCloseTo(expectedB)
}

const testToCartesian = (value: Polar, expected: Cartesian) => {
    expectToBeCloseTo(toCartesian(value), expected)
}

const testToPolar = (value: Cartesian, expected: Polar) => {
    expectToBeCloseTo(toPolar(value), expected)
}
const testToCartesianToPolarIdentity = (polar: Polar) => {
    const identity = pipe(toCartesian, toPolar)
    expectToBeCloseTo(polar, identity(polar))
}

const testToRadiansToDegreesIdentity = (degrees: number) => {
    const identity = pipe(toRadians, toDegrees)
    expect(degrees).toBe(identity(degrees))
}

describe('conversions', () => {
    test('to cartesian', () => {
        testToCartesian([0, 0], [0, 0])
        testToCartesian([1, 0], [1, 0])
        testToCartesian([1, Math.PI / 2], [0, 1])
        testToCartesian([1, Math.PI], [-1, 0])
        testToCartesian([1, (3 * Math.PI) / 2], [0, -1])
        testToCartesian([1, -Math.PI / 2], [0, -1])
        testToCartesian(
            [1, Math.PI / 4],
            [Math.cos(Math.PI / 4), Math.sin(Math.PI / 4)],
        )
        testToCartesian([2, 0], [2, 0])
        testToCartesian([5, Math.PI / 2], [0, 5])
    })

    test('to cartesian and to polar should result in original coordinates', () => {
        testToCartesianToPolarIdentity([0, 0])
        testToCartesianToPolarIdentity([1, 0])
        testToCartesianToPolarIdentity([1, Math.PI / 2])
        testToCartesianToPolarIdentity([1, Math.PI])
        // testToCartesianToPolarIdentity([1, 3*Math.PI/2])
        testToCartesianToPolarIdentity([1, -Math.PI / 2])
        testToCartesianToPolarIdentity([1, Math.PI / 4])
        testToCartesianToPolarIdentity([2, 0])
        testToCartesianToPolarIdentity([5, Math.PI / 2])
    })

    test('to radians', () => {
        expect(toRadians(0)).toBeCloseTo(0)
        expect(toRadians(180)).toBeCloseTo(Math.PI)
        expect(toRadians(90)).toBeCloseTo(Math.PI / 2)
        expect(toRadians(45)).toBeCloseTo(Math.PI / 4)
        expect(toRadians(270)).toBeCloseTo((3 * Math.PI) / 2)
    })

    test('to radians and to degrees should result in original degree', () => {
        testToRadiansToDegreesIdentity(0)
        testToRadiansToDegreesIdentity(180)
        testToRadiansToDegreesIdentity(90)
        testToRadiansToDegreesIdentity(45)
        testToRadiansToDegreesIdentity(270)
    })
})
