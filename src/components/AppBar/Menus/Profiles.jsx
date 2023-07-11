import { useState } from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import myAvatar from '~/assets/avatar.jpeg'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'

function Profiles() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl) // Boolean(anchorEl) === true ? open : false
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget) // event.currentTarget === <Button />
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box>
            <div>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ padding: 0 }}
                        aria-controls={open ? 'basic-menu-profiles' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 30, height: 30 }} src={myAvatar} alt='Minh Nghia avatar' />
                    </IconButton>
                </Tooltip>
                <Menu
                    id="basic-menu-profiles"
                    MenuListProps={{
                        'aria-labelledby': 'basic-button-profiles'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem>
                        <Avatar sx={{ width: '28px', height: '28px', mr: 2 }} /> Profile
                    </MenuItem>
                    <MenuItem>
                        <Avatar sx={{ width: '28px', height: '28px', mr: 2 }} /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
        </Box>
    )
}

export default Profiles