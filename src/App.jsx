import { useColorScheme } from '@mui/material/styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import Box from '@mui/material/Box'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Container from '@mui/material/Container'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode) // Set mode into localStorage
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
            <LightModeIcon fontsize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon fontsize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontsize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}



function App() {


  return (
    <Container maxWidth='false' disableGutters='true' sx={{ height: '100vh' }}>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor: 'primary.light',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>

      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        backgroundColor: 'primary.dark',
        display: 'flex',
        alignItems: 'center'
      }}
      >
        App Bar
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
      }}
      >
        Board Bar
      </Box>

    </Container>
  )
}

export default App
