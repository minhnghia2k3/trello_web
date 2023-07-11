import ModeSelect from '../../components/ModeSelect'
import Box from '@mui/material/Box'


function AppBar() {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            height: (theme) => theme.trello.appBarHeight
        }}><ModeSelect /></Box>
    )
}

export default AppBar