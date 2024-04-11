import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Typography, css } from '@mui/material';
import Box from '@mui/material/Box';

const header = () => {
  return (
    <div ClassName="header">
      <Box bgcolor="#ffa500" color ="white"  p={2}>
        
        <Typography variant="h2">料金確認</Typography>
      </Box>
    </div>
  )
}

export default header