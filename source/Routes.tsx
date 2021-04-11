import React from 'react'
import { Route } from 'react-router'
import { Fullscreen } from './components/Fullscreen'
import { Fourierite } from './generative/fourierite/Fourierite'
import { Revolution } from './generative/fourierite/types'

const circles: Revolution[] = [
    {
        radius: 200,
        frequency: 1,
        trunk: () => ({ stroke: 'red', opacity: 0.2 }),
        branch: () => ({ stroke: 'red', opacity: 0.1 }),
        node: () => ({ fill: 'pink', opacity: 0.5 }),
    },
    {
        radius: 50,
        frequency: 12,
        trunk: () => ({ stroke: 'red', opacity: 0.5 }),
        branch: () => ({ stroke: 'red', opacity: 0.5 }),
        node: () => ({ fill: 'pink', r: 2, opacity: 0.1 }),
    },
    {
        radius: 12,
        frequency: 120,
        trunk: () => ({ stroke: 'red', opacity: 0.1 }),
        branch: () => ({ stroke: 'red', opacity: 0.5 }),
        node: () => ({ fill: 'pink', r: 2, opacity: 0.5 }),
    },
    {
        radius: 50,
        frequency: 54,
        trunk: () => ({ stroke: 'red', opacity: 0.1 }),
        branch: () => ({ stroke: 'red', opacity: 0.5 }),
        node: () => ({ fill: 'pink', r: 2, opacity: 0.5 }),
    },
    {
        radius: 120,
        frequency: 165,
        trunk: () => ({ stroke: 'red', opacity: 0.1 }),
        branch: () => ({ stroke: 'red', opacity: 0.1 }),
        node: () => ({ fill: 'pink', r: 2, opacity: 0.5 }),
    },
]

export const Routes: React.FC = () => (
    <>
        <Route path='/fourierite'>
            <Fullscreen>
                <Fourierite revolutions={circles} steps={80} />
            </Fullscreen>
        </Route>
    </>
)
