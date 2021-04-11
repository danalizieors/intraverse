import { map, range, repeat, transpose, zip } from 'ramda'
import { Generated } from './generate'
import { Line } from './types'

const selectTrunks = (transposed: Generated['points'], revolution: number) => {
    const positions = transposed[revolution]
    const origins =
        transposed[revolution - 1] || repeat([0, 0], positions.length)
    return zip(origins, positions) as Line[]
}

const selectBranches = (
    transposed: Generated['points'],
    revolution: number,
) => {
    const [head, ...tail] = transposed[revolution]
    return zip([head, ...tail], [...tail, head]) as Line[]
}

const selectNodes = (transposed: Generated['points'], revolution: number) =>
    transposed[revolution]

export const select = ({ revolutions, times, points }: Generated) => {
    const transposed = transpose(points)

    return map(
        (revolution) => ({
            trunks: selectTrunks(transposed, revolution),
            branches: selectBranches(transposed, revolution),
            nodes: selectNodes(transposed, revolution),
            times,
        }),
        range(0, revolutions),
    )
}

export type Selection = ReturnType<typeof select>[number]
