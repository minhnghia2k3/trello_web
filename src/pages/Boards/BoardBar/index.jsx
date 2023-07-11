import Box from '@mui/material/Box'

function BoardBar() {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.dark',
            height: (theme) => theme.trello.boardBarHeight
        }}>Board Bar</Box>
    )
}

export default BoardBar