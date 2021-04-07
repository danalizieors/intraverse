import { greatestCommonDivisor, leastCommonMultiple } from '../factoring'

describe('factoring', () => {
    test('greatest common divisor', () => {
        expect(greatestCommonDivisor([5, 10, 25])).toBe(5)
    })

    test('least common multiple', () => {
        expect(leastCommonMultiple([5, 10, 25])).toBe(50)
    })
})
