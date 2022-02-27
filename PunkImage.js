import React, { useEffect, useState } from 'react'
import './PunkImage.css'
import { imgCrypto } from './Image'
import CryptoMain from './CryptoMain'
function PunkImage() {
    const [img, setImg] = useState("");
    const [name, setname] = useState("");
    const [hash, sethash] = useState("");

    const handlClick = (img, name, hash) => {
        setImg(img);
        setname(name);
        sethash(hash);
    }
    return (
        <div className='container'>
            <CryptoMain img={img} name={name} hash={hash} />
            <div className='parent'>
                {imgCrypto.map(item => (
                    <div className='punk' onClick={e => handlClick(item.img, item.name, item.hash)}>
                        <img src={item.img} />
                        <h3>{item.name}</h3>
                        <span className='spn1'>{item.hash}</span>
                        <div className='inf'>
                            <img src='/assets/weth.png' />
                            <span className='price'>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default PunkImage