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


const MENU_STYLE = {

    color: 'primary.main',
    bgcolor: 'white',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
        color: 'primary.main'
    },
    '&:hover': {
        bgColor: 'primary.light'
    }

}
function BoardBar() {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            paddingX: 2,
            overflowX: 'auto',
            borderTop: '1px solid #00bfa5',
            height: (theme) => theme.trello.boardBarHeight
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip
                    sx={MENU_STYLE}
                    icon={<SpaceDashboardIcon />}
                    label="MERN stack Board"
                    clickable />

                <Chip
                    sx={MENU_STYLE}
                    icon={<VpnLockIcon />}
                    label="Public / Private"
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
                <Button variant='outlined' startIcon={<PersonAddIcon />}>Create</Button>
                <AvatarGroup
                    max={4}
                    sx={{
                        '& .MuiAvatar-root': {
                            width: '34px',
                            height: '34px',
                            fontSize: '16px'
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


                </AvatarGroup>

            </Box>

        </Box>
    )
}

export default BoardBar