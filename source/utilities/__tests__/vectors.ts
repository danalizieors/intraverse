import { add } from '../vectors'

describe('vectors', () => {
    test('add', () => {
        expect(add([1, 2], [10, 20])).toStrictEqual([11, 22])
    })
})
