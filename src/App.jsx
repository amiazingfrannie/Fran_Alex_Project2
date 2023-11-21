// HomePage File
import './App.css'
import './commonStyle/common.css'; 
import ghost from './commonStyle/pics/ghost.png'
import React from 'react';
import BasicNav from './BasicNav/BasicNav';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// homepage
export default function App() {

    return(
        <div className="app-container">
        <BasicNav />
        <div className="content">
            <img src={ghost} alt="Spooky Ghost" className="centered-image" />
            <p className="text-below-image">Wanna take a guess?</p>
            <Link to="/game/normal" style={{ textDecoration: 'none' }}>
                <Button size="small" sx={{
                    backgroundColor: '#ee652a', // Example background color
                    fontFamily: 'Normal',
                    fontSize: '16px',
                    color: 'white', // Text color
                    '&:hover': {
                        backgroundColor: '#d34d13', // Hover state background color
                    },
                    // padding: '10px 20px', // Padding
                    borderRadius: '5px', // Border radius
                    // Add more styles as needed
                    }}>Start Easy</Button>
            </Link>
        </div>
        </div>
    )
}

