import useSWR from 'swr';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Header from './Header.jsx';
import Modal from './Modal.jsx';
import { Typography, Stack, Button, Grid, Box, Container } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';

import './App.css';

const App = () => {
  const [fee, setFee] = useState(0);
  const [count, setCount] = useState(0);


  Notification.requestPermission().then(function (result) {
    console.log(result);
  });

  const notification_increase = (fee) => {
    Notification.requestPermission();
    const notification = new Notification("料金が"+fee+"円となりました");
  };

  const max = () => {
    Notification.requestPermission();
    const notification = new Notification("最大料金700円になりました");
  };

  let timer;
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (fee == 700) {
        max();
      } else if ((count-30) % 30 === 0 && count > 30 && fee < 650) { 
        const newFee = fee + 150;
        setFee(newFee);
      
        notification_increase(newFee);
      }
      setCount(prevCount => prevCount + 1);
      
    }, 1000); 
    return () => clearInterval(timer);

  },[count]); 

  //入庫から30分無料 150円/30分 24時間最大700円
  
 
  return (
    <div className="all">
      <Header />
      
      <Box className="main1">
          
        <Stack direction="row" justifyContent="space-between" className='time'>
            <Stack direction="row" sx={{paddingLeft:3}}>
              <AccessTimeIcon sx={{fontSize:"250%"}}/>
              <Typography variant="h5" fontWeight={700}>入庫時間</Typography>
            </Stack>
            <Typography variant="h4" fontWeight={700}>{(String(Math.trunc(count/3600)).padStart(2, '0'))}:{String(Math.trunc(count/60)).padStart(2, '0')}:{String(count%60).padStart(2, '0')}</Typography>
        </Stack>
        
        <Stack direction="row" justifyContent="space-between" mt={2} className='fee'>
          <Stack direction="row" paddingTop={5}>
            <CurrencyYenIcon style={{fontSize:"500%"}}/>
            <Typography variant="h3" fontWeight={700}>料金</Typography>
          </Stack>  
          <Typography variant="h1" fontWeight={700}><span className='goukei'>合計</span>{fee}<span className='goukei'>円</span></Typography>              
        </Stack>
        <Modal fee={fee} />
      </Box>
    </div>
  );
}


export default App;


