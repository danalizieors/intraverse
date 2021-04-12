import React from 'react'
import { Route } from 'react-router'
import { Fullscreen } from './components/Fullscreen'
import { Fourierite } from './generative/fourierite/Fourierite'
import { Revolution } from './generative/fourierite/types'

const circles: Revolution[] = [
    {
        radius: 30,
        frequency: 1,
        trunk: () => ({ stroke: 'hsl(0, 0%, 20%)' }),
        branch: () => ({ stroke: 'hsl(0, 0%, 30%)' }),
    },
    {
        radius: 10,
        frequency: -2,
        trunk: () => ({ stroke: 'hsl(0, 0%, 30%)' }),
        branch: () => ({ stroke: 'hsl(0, 0%, 40%)' }),
    },
    {
        radius: 10,
        frequency: -3,
        trunk: () => ({ stroke: 'hsl(0, 0%, 40%)' }),
        branch: () => ({ stroke: 'hsl(0, 0%, 50%)' }),
    },
    {
        radius: 20,
        frequency: 2,
        trunk: () => ({ stroke: 'hsl(0, 0%, 50%)' }),
        branch: () => ({ stroke: 'hsl(0, 0%, 60%)' }),
    },
    {
        radius: 20,
        frequency: 1,
        branch: () => ({ stroke: 'hsl(0, 0%, 70%)' }),
        node: ({ time }) => ({
            fill: 'hsl(0, 0%, 70%)',
            r: 1 - Math.abs(time - 0.5),
        }),
    },
    {
        radius: 8,
        frequency: 0,
        branch: () => ({ stroke: 'hsl(0, 0%, 80%)' }),
        node: ({ time }) => ({
            fill: 'hsl(0, 0%, 80%)',
            r: Math.abs((time - 0.5) * 3),
        }),
    },
    {
        radius: 8,
        frequency: 0,
        branch: () => ({ stroke: 'hsl(0, 0%, 70%)' }),
        node: ({ time }) => ({
            stroke: 'hsl(0, 0%, 70%)',
            r: Math.abs((time - 0.5) * 3),
        }),
    },
]

export const Routes: React.FC = () => (
    <>
        <Route path='/fourierite'>
            <Fullscreen>
                <Fourierite revolutions={circles} steps={120} />
            </Fullscreen>
        </Route>
    </>
)
