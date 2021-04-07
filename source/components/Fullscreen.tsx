import { Box } from '@chakra-ui/react'
import React from 'react'

export const Fullscreen: React.FC = ({ children }) => (
    <Box position='fixed' width='100vw' height='100vh'>
        {children}
    </Box>
)
