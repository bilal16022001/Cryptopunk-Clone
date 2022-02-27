import React from 'react'
import './Header.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return (
        <div className='container'>
            <div className='header'>
                <div className='img'>
                    <img src='/assets/cryptopunk-logo.png' />

                </div>
                <div className='search'>
                    <SearchIcon className='icon' /><input type="search" placeholder='Collection, item or user' />
                </div>
                <nav>
                    <ul>
                        <li><a href='#'>Drops</a></li>
                        <li><a href='#'>Marketplace</a></li>
                        <li><a href='#'>Create</a></li>
                    </ul>
                </nav>
                <div className='dark'>
                    <DarkModeIcon />
                </div>
                <div className='btn'>
                    <Button variant='contained'>GET IN</Button>
                </div>
            </div>
        </div>
    )
}

export default Header