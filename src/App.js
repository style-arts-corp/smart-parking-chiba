//import './App.css';
import * as React from 'react';
import Header from './Header';
import { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography, css } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Stack from '@mui/material/Stack';
import './App.css';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';

function App() {
  const [fee, setFee] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (count % 5 === 0) {
        setFee(prevFee => prevFee + 500);
      }
      setCount(prevCount => prevCount + 1);
    }, 1000); 
    return () => clearInterval(timer);
  }); 

  
  
  return (
    <div>
      <Header />
      <div ClassName = "main">
        <Stack direction="row" mt={2}>
          <Typography variant="h3" >駐車時間</Typography>
          <AccessTimeIcon style={{fontSize:"300%"}}/>
        </Stack>
        <Typography variant="h3">{Math.trunc(count/3600)}:{Math.trunc(count/60)}:{(Math.trunc(count%60))}</Typography>
        <Stack direction="row" mt={2}>
          <Typography variant="h3">料金</Typography>
          <CurrencyYenIcon style={{fontSize:"300%"}}/>
        </Stack>
        <Typography variant="h3">{fee}</Typography>
      </div>
    </div>
  );
}


export default App;


