import React, { useEffect, useState } from 'react';
import '../styles/Player.sass'

export default function Player() {
    const [position, changePosition] = useState(0);
    console.log("rendering")
    useEffect(()=> {
        console.log("rendering por el useeffect")
        document.addEventListener('keydown', detectKeyDown, true)
    }, [])

    const detectKeyDown = (e: any) => {
        console.log('Clicked Key: ', e.key)
        if(e.key === 'Enter') {
            changePosition(position => position -1)
        }
    }
    
    return (
    <div className='Player'>{position}</div>
    )
}
