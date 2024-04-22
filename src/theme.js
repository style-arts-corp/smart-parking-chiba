import { ThemeProvider, createTheme } from '@mui/material/styles'

const Theme = createTheme({
    typography: {
        fontFamily: 'Noto Sans JP',
        fontWeightBold: 800,
    }
});

export default Theme;