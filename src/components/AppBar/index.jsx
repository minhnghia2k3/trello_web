import ModeSelect from '~/components/ModeSelect'
import WorkSpaces from './Menus/WorkSpaces'
import Recent from './Menus/Recent'
import Star from './Menus/Starred'
import Templates from './Menus/Templates'
import Profiles from './Menus/Profiles'

import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import Button from '@mui/material/Button'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'

function AppBar() {
    return (
        <Box px={2} sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: (theme) => theme.trello.appBarHeight,
            justifyContent: 'space-between'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <AppsIcon sx={{
                    color: 'primary.main'
                }} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                    }}>
                    <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
                    <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
                    <WorkSpaces />
                    <Recent />
                    <Star />
                    <Templates />
                    <Button variant="outlined">Create</Button>

                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <TextField id="outlined-search" label="Search..." type="search" size='small' />
                <ModeSelect />
                <Tooltip title="Notifications">
                    <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
                        <NotificationsNoneIcon />
                    </Badge>
                </Tooltip>
                <Tooltip title="Help">
                    <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
                <Profiles />
            </Box>
        </Box>
    )
}

export default AppBar