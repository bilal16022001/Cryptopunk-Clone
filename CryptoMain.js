import React from 'react'
import './CryptoMain.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function CryptoMain({ img, name, hash }) {
    console.log("from main img ==> ", img);
    console.log("from main name ==> ", name);
    console.log("from main hash ==> ", hash);
    return (
        <div className='container'>
            <div className='content'>
                <div className='img'>
                    <img src={img == "" ? '/punks/1.jpg' : img} />
                </div>
                <div className='info'>
                    <h1>{name == "" ? "blockhead #4" : name}</h1>
                    <span>{hash == "" ? ".#3" : hash}</span>
                    <div className='so'>
                        <span></span>
                        <nav>
                            <ul>
                                <li><a href='#'></a><InstagramIcon /></li>
                                <li><a href='#'></a><TwitterIcon /></li>
                                <li><a href='#'></a><MoreHorizIcon /></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoMain