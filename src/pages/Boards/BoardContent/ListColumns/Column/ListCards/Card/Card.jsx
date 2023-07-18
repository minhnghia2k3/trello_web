import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


function Card({ card }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: card._id,
        data: { ...card }
    })

    const dndCardsStyle = {
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1
    }
    const showCardActions = () => {
        return card?.memberIds?.length > 0 || card?.comments?.length > 0 || card?.attachments?.length > 0
    }
    return (
        <>
            <MuiCard
                ref={setNodeRef} style={dndCardsStyle}{...attributes}{...listeners}
                sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>{card?.title}</Typography></CardContent>
                {showCardActions() && <CardActions sx={{ p: '0 4px 8px 4px' }}>
                    {/* null?.length == false/true */}
                    {card?.memberIds?.length > 0 && <Button size="small" startIcon={<GroupIcon />}>{card?.memberIds?.length}</Button>}
                    {card?.comments?.length > 0 && <Button size="small" startIcon={<ModeCommentIcon />}>{card?.comments?.length}</Button>}
                    {card?.attachments?.length > 0 && <Button size="small" startIcon={<AttachmentIcon />}>{card?.attachments?.length}</Button>}
                </CardActions>}

            </MuiCard>
        </>
    )
}

export default Card