import Card from './Card/Card'
import Box from '@mui/material/Box'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCards({ cards }) {
    const arrayCardIds = cards?.map(c => c._id)
    return (
        <SortableContext items={arrayCardIds} strategy={verticalListSortingStrategy}>
            {/* List cards */}
            <Box sx={{
                p: '0 5px',
                m: '0 5px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
                '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da', borderRadius: '8px' },
                '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
            }}>
                {cards && cards.map(card => <Card key={card._id} card={card} />)}
            </Box>
        </SortableContext>

    )
}

export default ListCards