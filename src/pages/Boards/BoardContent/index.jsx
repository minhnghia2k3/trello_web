import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import Divider from '@mui/material/Divider'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ContentPaste from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import Button from '@mui/material/Button'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import myAvatar from '~/assets/avatar.jpeg'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function BoardContent() {
    const COLUMN_HEADER_HEIGHT = '50px'
    const COLUMN_FOOTER_HEIGHT = '56px'
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => { setAnchorEl(event.currentTarget) }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
            height: (theme) => theme.trello.boardContentHeight,
            p: '10px 0px'
        }}>
            <Box sx={{
                bgcolor: 'inherit', width: '100%', height: '100%', display: 'flex', overflowX: 'auto',
                overflowY: 'hidden'
            }}>
                {/* Box Column 1*/}
                <Box sx={{
                    minWidth: '300px',
                    maxWidth: '300px',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
                    ml: 2,
                    borderRadius: '6px',
                    height: 'fit-content',
                    maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
                }}>

                    {/* Column Header */}
                    <Box sx={{
                        height: COLUMN_HEADER_HEIGHT,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }} variant="h6">Column Title</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Tooltip title="More Options">
                                <ExpandMoreIcon
                                    sx={{ color: 'text.primary', cursor: 'pointer' }}
                                    id="basic-column-dropdown"
                                    aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                />
                            </Tooltip>
                            <Menu
                                id="basic-menu-column-dropdown"
                                MenuListProps={{
                                    'aria-labelledby': 'basic-column-dropdown'
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem>
                                    <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                                    <ListItemText>Add new card</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                                    <ListItemText>Cut</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                                    <ListItemText>Copy</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                                    <ListItemText>Paste</ListItemText>
                                </MenuItem>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                                    <ListItemText>Archive column</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
                                    <ListItemText>Remove column</ListItemText>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>

                    {/* List cards */}
                    <Box sx={{
                        p: '0 5px',
                        m: '0 5px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
                        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da', borderRadius: '8px' },
                        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
                    }}>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={myAvatar}
                                title="my avatar"
                            />
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Minhnghia2k3 MERN Stack</Typography></CardContent>
                            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                                <Button size="small" startIcon={<ModeCommentIcon />}>15</Button>
                                <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Card 01</Typography></CardContent>
                        </Card>
                    </Box>

                    {/* Column footer */}
                    <Box sx={{
                        height: COLUMN_FOOTER_HEIGHT,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Button startIcon={<AddCardIcon />}>Add new card</Button>
                        <Tooltip title='Drag to move'><DragHandleIcon sx={{ cursor: 'pointer' }} /></Tooltip>
                    </Box>
                </Box>

                {/* Box Column 2*/}
                <Box sx={{
                    minWidth: '300px',
                    maxWidth: '300px',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
                    ml: 2,
                    borderRadius: '6px',
                    height: 'fit-content',
                    maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
                }}>

                    {/* Column Header */}
                    <Box sx={{
                        height: COLUMN_HEADER_HEIGHT,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }} variant="h6">Column Title</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Tooltip title="More Options">
                                <ExpandMoreIcon
                                    sx={{ color: 'text.primary', cursor: 'pointer' }}
                                    id="basic-column-dropdown"
                                    aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                />
                            </Tooltip>
                            <Menu
                                id="basic-menu-column-dropdown"
                                MenuListProps={{
                                    'aria-labelledby': 'basic-column-dropdown'
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem>
                                    <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                                    <ListItemText>Add new card</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                                    <ListItemText>Cut</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                                    <ListItemText>Copy</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                                    <ListItemText>Paste</ListItemText>
                                </MenuItem>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                                    <ListItemText>Archive column</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
                                    <ListItemText>Remove column</ListItemText>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>

                    {/* List cards */}
                    <Box sx={{
                        p: '0 5px',
                        m: '0 5px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
                        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da', borderRadius: '8px' },
                        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
                    }}>
                        <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={myAvatar}
                                title="my avatar"
                            />
                            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}><Typography>Minhnghia2k3 MERN Stack</Typography></CardContent>
                            <CardActions sx={{ p: '0 4px 8px 4px' }}>
                                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                                <Button size="small" startIcon={<ModeCommentIcon />}>15</Button>
                                <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
                            </CardActions>
                        </Card>
                    </Box>

                    {/* Column footer */}
                    <Box sx={{
                        height: COLUMN_FOOTER_HEIGHT,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Button startIcon={<AddCardIcon />}>Add new card</Button>
                        <Tooltip title='Drag to move'><DragHandleIcon sx={{ cursor: 'pointer' }} /></Tooltip>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BoardContent