import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'


const MENU_STYLE = {

    color: 'white',
    bgcolor: 'transparent',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
        color: 'white'
    },
    '&:hover': {
        bgColor: 'white'
    }

}
// Object destructuring
function BoardBar({ board }) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            paddingX: 2,
            overflowX: 'auto',
            height: (theme) => theme.trello.boardBarHeight,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip
                    sx={MENU_STYLE}
                    icon={<SpaceDashboardIcon />}
                    label={board?.title}
                    clickable />

                <Chip
                    sx={MENU_STYLE}
                    icon={<VpnLockIcon />}
                    label={capitalizeFirstLetter(board.type)} //required
                    clickable />
                <Chip
                    sx={MENU_STYLE}
                    icon={<AddToDriveIcon />}
                    label="Add to drive"
                    clickable />
                <Chip
                    sx={MENU_STYLE}
                    icon={<BoltIcon />}
                    label="Automation"
                    clickable />
                <Chip
                    sx={MENU_STYLE}
                    icon={<FilterListIcon />}
                    label="Filters"
                    clickable />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button
                    variant='outlined'
                    startIcon={<PersonAddIcon />}
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                            borderColor: 'white'
                        }
                    }}
                >Create</Button>
                <AvatarGroup
                    max={7}
                    sx={{
                        gap: '10px',
                        '& .MuiAvatar-root': {
                            width: '34px',
                            height: '34px',
                            fontSize: '16px',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            '&:first-of-type': {
                                bgcolor: '#a4b0be'
                            }
                        }
                    }}
                >
                    <Tooltip title="minhnghia2k3">
                        <Avatar
                            alt="Minh Nghia"
                            src='https://github.com/minhnghia2k3/trello_web/blob/master/src/assets/avatar.jpeg?raw=true'
                        />
                    </Tooltip>
                    <Tooltip title="minhnghia2k3">
                        <Avatar
                            alt="Minh Nghia"
                            src='https://github.com/minhnghia2k3/trello_web/blob/master/src/assets/avatar.jpeg?raw=true'
                        />
                    </Tooltip>
                    <Tooltip title="minhnghia2k3">
                        <Avatar
                            alt="Minh Nghia"
                            src='https://github.com/minhnghia2k3/trello_web/blob/master/src/assets/avatar.jpeg?raw=true'
                        />
                    </Tooltip>
                    <Tooltip title="minhnghia2k3">
                        <Avatar
                            alt="Minh Nghia"
                            src='https://github.com/minhnghia2k3/trello_web/blob/master/src/assets/avatar.jpeg?raw=true'
                        />
                    </Tooltip>
                    <Tooltip title="minhnghia2k3">
                        <Avatar
                            alt="Minh Nghia"
                            src='https://github.com/minhnghia2k3/trello_web/blob/master/src/assets/avatar.jpeg?raw=true'
                        />
                    </Tooltip>
                    <Tooltip title="minhnghia2k3">
                        <Avatar
                            alt="Minh Nghia"
                            src='https://github.com/minhnghia2k3/trello_web/blob/master/src/assets/avatar.jpeg?raw=true'
                        />
                    </Tooltip>
                    <Tooltip title="minhnghia2k3">
                        <Avatar
                            alt="Minh Nghia"
                            src='https://github.com/minhnghia2k3/trello_web/blob/master/src/assets/avatar.jpeg?raw=true'
                        />
                    </Tooltip>
                    <Tooltip title="minhnghia2k3">
                        <Avatar
                            alt="Minh Nghia"
                            src='https://github.com/minhnghia2k3/trello_web/blob/master/src/assets/avatar.jpeg?raw=true'
                        />
                    </Tooltip>


                </AvatarGroup>

            </Box>

        </Box>
    )
}

export default BoardBar