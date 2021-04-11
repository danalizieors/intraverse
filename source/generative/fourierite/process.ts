import { map, zipWith } from 'ramda'
import { SVGProps } from 'react'
import { Cartesian } from '../../utilities/conversions'
import { Selection } from './select'
import { CircleFormatter, Line, LineFormatter, Revolution } from './types'

const formatLines = (
    formatter: LineFormatter | undefined,
    lines: Line[],
    times: number[],
) => {
    if (!formatter) {
        return null
    }

    const toProps = (line: Line, time: number) =>
        ({
            x1: line[0][0],
            y1: line[0][1],
            x2: line[1][0],
            y2: line[1][1],
            ...formatter({ line, time }),
        } as SVGProps<SVGLineElement>)

    const zipped = zipWith((line, time) => ({ line, time }), lines, times)
    return map(({ line, time }) => toProps(line, time), zipped)
}

const formatCircles = (
    formatter: CircleFormatter | undefined,
    points: Cartesian[],
    times: number[],
) => {
    if (!formatter) {
        return null
    }

    const toProps = (point: Cartesian, time: number) =>
        ({
            cx: point[0],
            cy: point[1],
            ...formatter({ point, time }),
        } as SVGProps<SVGCircleElement>)

    const zipped = zipWith((point, time) => ({ point, time }), points, times)
    return map(({ point, time }) => toProps(point, time), zipped)
}

const processRevolution = (revolution: Revolution, selection: Selection) => ({
    trunks: formatLines(revolution.trunk, selection.trunks, selection.times),
    branches: formatLines(
        revolution.branch,
        selection.branches,
        selection.times,
    ),
    nodes: formatCircles(revolution.node, selection.nodes, selection.times),
})

export const process = (revolutions: Revolution[], selections: Selection[]) => {
    const zipped = zipWith(
        (revolution, selection) => ({ revolution, selection }),
        revolutions,
        selections,
    )

    return map(
        ({ revolution, selection }) => processRevolution(revolution, selection),
        zipped,
    )
}
