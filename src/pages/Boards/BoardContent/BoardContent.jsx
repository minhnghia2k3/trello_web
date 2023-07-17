import { useEffect, useState } from 'react'
import ListColumns from './ListColumns/ListColumns'
import Box from '@mui/material/Box'
import { mapOrder } from '~/utils/sort'

import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
    //dnd-kit
    // https://docs.dndkit.com/api-documentation/sensors#usesensors

    const mouseSensor = useSensor(MouseSensor, {
        // Yêu cầu chuột di chuyển 10pixels => fire event drag
        activationConstraint: {
            distance: 10
        }
    })
    const touchSensor = useSensor(TouchSensor, {
        // Nhấn giữ 250ms, di chuyển 5 pixels => fire event drag
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    })
    const mySensors = useSensors(mouseSensor, touchSensor)

    const [orderedColumns, setOrderedColumns] = useState([])
    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
    }, [board])

    const handleDragEnd = (event) => {
        const { active, over } = event
        if (!over) return // nếu over = null => return
        if (active.id !== over.id) {
            const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
            const newIndex = orderedColumns.findIndex(c => c._id === over.id)
            const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
            // Console xử lý api
            // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id) // save to db
            // console.log('dndOrderedColumns', dndOrderedColumns)
            // console.log('dndOrderedColumnsIds', dndOrderedColumnsIds) 

            // Cập nhật lại state sau khi đã kéo thả
            return setOrderedColumns(dndOrderedColumns)
        }
    }
    return (
        <DndContext onDragEnd={handleDragEnd} sensors={mySensors}>
            <Box sx={{
                backgroundColor: 'primary.main',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                height: (theme) => theme.trello.boardContentHeight,
                p: '10px 0px'
            }}>
                <ListColumns columns={orderedColumns} />
            </Box>
        </DndContext >
    )
}

export default BoardContent