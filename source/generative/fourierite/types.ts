import { SVGProps } from 'react'
import { Cartesian } from '../../utilities/conversions'

export type Line = [Cartesian, Cartesian]

export type LineFormatter = (parameters: {
    time: number
    line: Line
}) => SVGProps<SVGLineElement>

export type CircleFormatter = (parameters: {
    time: number
    point: Cartesian
}) => SVGProps<SVGLineElement>

export type Revolution = {
    radius: number
    frequency: number
    trunk?: LineFormatter
    branch?: LineFormatter
    node?: CircleFormatter
}
