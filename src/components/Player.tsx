import React, { useEffect, useState } from 'react';
import '../styles/Player.sass'

export default function Player() {
    const [posx, changePositionX] = useState(0);
    const [posy, changePositionY] = useState(0);
    useEffect(()=> {
        console.log("rendering por el useeffect")
        document.addEventListener('keydown',  detectKeyDown, true)
    }, [])

    const detectKeyDown = (e: any) => {
        console.log('Clicked Key: ', e.key)
        
        if(e.key === 'Enter') {
            changePositionX(posx => posx +1 )
        }
        switch(e.key){
            case 'ArrowLeft':
                changePositionX(posx => posx -1 )
                break;
            case 'ArrowRight':
                changePositionX(posx => posx +1 )
                break;
            case 'ArrowUp':
                changePositionY(posy => posy -1 )
                break;
            case 'ArrowDown':
                changePositionY(posy => posy +1 )
                break;
        }
    }
    
    return (
    <div className='Player'>{posx},{posy}</div>
    )
}
