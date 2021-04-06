import { extendTheme } from '@chakra-ui/react'
import 'focus-visible'

export const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    styles: {
        global: {
            '.js-focus-visible :focus:not([data-focus-visible-added])': {
                outline: 'none',
                boxShadow: 'none',
                borderColor: 'var(--chakra-colors-whiteAlpha-500)',
            },
        },
    },
})
