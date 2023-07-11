import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Check from '@mui/icons-material/Check'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Templates() {
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
                <Button
                    id="basic-button-templates"
                    aria-controls={open ? 'basic-menu-templates' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<ExpandMoreIcon />}
                >
                    Templates
                </Button>
                <Menu
                    id="basic-menu-templates"
                    MenuListProps={{
                        'aria-labelledby': 'basic-button-templates'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem>
                        <ListItemText inset>Single</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText inset>1.15</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText inset>Double</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Check />
                        </ListItemIcon>
                        Custom: 1.2
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>Add space before paragraph</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText>Add space after paragraph</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemText>Custom spacing...</ListItemText>
                    </MenuItem>
                </Menu>
            </div>
        </Box>
    )
}

export default Templates