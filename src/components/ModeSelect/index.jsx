import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeSelect() {
    const { mode, setMode } = useColorScheme()

    const handleChange = (event) => {
        const selectedMode = event.target.value
        setMode(selectedMode) // Set mode into localStorage
    }

    return (
        <FormControl size="small">
            <InputLabel id="label-select-theme">Mode</InputLabel>
            <Select
                labelId="label-select-theme"
                id="select-theme"
                value={mode}
                label="Theme"
                onChange={handleChange}
            >
                <MenuItem value='light'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LightModeIcon fontSize='small' /> Light
                    </Box>
                </MenuItem>
                <MenuItem value='dark'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <DarkModeIcon fontSize='small' /> Dark
                    </Box>
                </MenuItem>
                <MenuItem value='system'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SettingsBrightnessIcon fontSize='small' /> System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    )
}
export default ModeSelect