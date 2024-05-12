import React, { useState, useEffect } from 'react';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import { Typography, Button } from '@mui/material';
import './Modal.css';

const Modal = ({ fee }) => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (modal) {
            document.body.classList.add('active-modl');
            
        } else {
            document.body.classList.remove('active-modl');
        }

        return () => {
            document.body.classList.remove('active-modl');
        };
    }, [modal]);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <Button
                onClick={toggleModal}
                variant="contained"
                className="button"
                size="large"
                startIcon={<DirectionsCarFilledRoundedIcon />}
            >
                出庫する
            </Button>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Typography variant="h2" className='thanks' style={{ fontSize: "200%" }}>ご利用ありがとうございました</Typography>
                        <Typography variant="h2">料金は{fee}円となります</Typography>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;