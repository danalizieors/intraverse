import { map, range, zipWith } from 'ramda'
import React, { Fragment, SVGProps } from 'react'
import { generate } from './generate'
import { process } from './process'
import { select } from './select'
import { Revolution } from './types'

const mapLines = (propss: SVGProps<SVGLineElement>[] | null) =>
    propss &&
    map(
        (props) => (
            <line
                key={`${props.x1}${props.y1}${props.x2}${props.y2}`}
                strokeLinecap='round'
                {...props}
            />
        ),
        propss,
    )

const mapCircles = (propss: SVGProps<SVGCircleElement>[] | null) =>
    propss &&
    map((props) => <circle key={`${props.cx}${props.cy}`} {...props} />, propss)

type Props = {
    revolutions: Revolution[]
    steps: number
}

export const Fourierite: React.FC<Props> = ({ revolutions, steps }) => {
    const generated = generate(revolutions, steps)
    const selections = select(generated)
    const processed = process(revolutions, selections)
    const indexed = zipWith(
        (revolution, index) => ({ revolution, index }),
        processed,
        range(0, revolutions.length),
    )

    const rendered = map(
        ({ revolution, index }) => (
            <Fragment key={index}>
                {mapLines(revolution.trunks)}
                {mapLines(revolution.branches)}
                {mapCircles(revolution.nodes)}
            </Fragment>
        ),
        indexed,
    )

    return (
        <svg viewBox='-100 -100 200 200' style={{ background: 'black' }}>
            <mask id='mask'>
                <g transform='translate(0, -20) rotate(90)'>{rendered}</g>
            </mask>
            <defs>
                <linearGradient id='gradient' gradientTransform='rotate(60)'>
                    <stop offset='0%' stop-color='#2595B8' />
                    <stop offset='100%' stop-color='#6AA63A' />
                </linearGradient>
            </defs>
            <circle r='100' mask='url(#mask)' fill='url(#gradient)' />
        </svg>
    )
}
