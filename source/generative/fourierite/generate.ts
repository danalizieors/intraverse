import { map, pipe, range } from 'ramda'
import { Cartesian, toCartesian } from '../../utilities/conversions'
import { add } from '../../utilities/vectors'
import { Revolution } from './types'

type GenerateSectorType = (
    revolutions: Revolution[],
) => (time: number, phase?: number, origin?: Cartesian) => Cartesian[]

const generateSector: GenerateSectorType = (revolutions) => (
    time,
    phase = 0,
    origin = [0, 0],
) => {
    if (!revolutions.length) {
        return []
    }

    const [revolution, ...tail] = revolutions

    const angle = phase + 2 * Math.PI * revolution.frequency * time
    const position = add(origin, toCartesian([revolution.radius, angle]))

    return [position, ...generateSector(tail)(time, angle, position)]
}

export const generate = (revolutions: Revolution[], steps: number) => {
    const times = pipe(
        range(0),
        map((step) => step / steps),
    )(steps)

    const points = map(generateSector(revolutions), times)

    return {
        revolutions: revolutions.length,
        steps,
        times,
        points,
    }
}

export type Generated = ReturnType<typeof generate>
