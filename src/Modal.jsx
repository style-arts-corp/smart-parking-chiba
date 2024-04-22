import React from 'react'
import { useState } from 'react'
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import { Typography, Stack, Button, Grid, Box, Container } from '@mui/material';
import './Modal.css'

const Modal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modl')
    } else {
        document.body.classList.remove('active-modl')
    }

    return (
        <>
            <Button 
            onClick={toggleModal}
            variant="contained" 
            className='button' 
            size='large' 
            startIcon={<DirectionsCarFilledRoundedIcon /> }>
                出庫する
            </Button>


            {modal && (
                <div className="modal">
                    <div 
                    onClick={toggleModal} 
                    className="overlay">    
                    </div>
                    <div className="modal-content">
                        <h2>hello</h2>
                        <Button
                        className='close-modal'
                        onClick={toggleModal}
                        variant="contained" 
                        >CLOSE</Button>
                    </div>  
                </div>

            )}
            
        </>
    )
}

export default Modal