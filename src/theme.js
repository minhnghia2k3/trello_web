// import { createTheme } from '@mui/material/styles'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { pink } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
    trello: {
        appBarHeight: '58px',
        boardBarHeight: '60px'
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: pink[600]
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    main: pink[400]
                }
            }
        }
    }
})

export default theme