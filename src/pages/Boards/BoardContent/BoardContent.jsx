import ListColumns from './ListColumns/ListColumns'
import Box from '@mui/material/Box'

function BoardContent() {

    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
            height: (theme) => theme.trello.boardContentHeight,
            p: '10px 0px'
        }}>
            <ListColumns />
        </Box>
    )
}

export default BoardContent