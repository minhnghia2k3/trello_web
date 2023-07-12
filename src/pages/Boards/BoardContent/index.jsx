import Box from '@mui/material/Box'

function BoardContent() {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
            height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
        }}>Box content</Box>
    )
}

export default BoardContent