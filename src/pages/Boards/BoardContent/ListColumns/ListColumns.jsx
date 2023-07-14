import Column from './Column/Column'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'


function ListColumns({ columns }) {
    return (
        // /* Board scroll bar */
        <Box sx={{
            bgcolor: 'inherit',
            width: '100%',
            height: '100%',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden'
        }
        }>
            {columns && columns.map(column => <Column key={column._id} column={column} />)}



            {/* Add Column */}
            <Box sx={{
                minWidth: '200px',
                maxWidth: '200px',
                height: 'fit-content',
                bgcolor: '#ffffff3d',
                borderRadius: '6px',
                mx: 2
            }}>
                <Button sx={{
                    width: '100%',
                    color: 'white',
                    justifyContent: 'flex-start',
                    pl: 2.5,
                    py: 1
                }}
                    startIcon={<NoteAddIcon />}>Add new column</Button>
            </Box>
        </Box>
    )
}

export default ListColumns