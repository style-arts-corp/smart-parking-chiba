import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { AppBar, Stack, Typography} from '@mui/material';
import Box from '@mui/material/Box';

const header = () => {
  return (
    <div className="header">
      <AppBar position="static">
        <container maxWidth="md">
          <Box sx={{bgcolor:"#ffa500", color:"white"}}  padding={2}>
            <Stack direction="row">
              <Typography variant="h3" className="title" fontFamily="Noto Sans JP" fontWeight="fontWeightBold" paddingLeft={7}>料金確認</Typography>
            </Stack>
          </Box>
        </container>
      </AppBar>
    </div>
  )
}

export default header