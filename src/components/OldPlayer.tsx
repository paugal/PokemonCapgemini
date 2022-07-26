import React, { useEffect, useState } from 'react';
import '../styles/Player.sass'

export default function Player() {
    const [posx, setPositionX] = useState(0);
    const [posy, setPositionY] = useState(0);
    useEffect(()=> {
        console.log("rendering por el useeffect")
        document.addEventListener('keydown',  detectKeyDown, true)
    }, [])

    const detectKeyDown = (e: any) => {
        console.log('Clicked Key: ', e.key)
        
        if(e.key === 'Enter') {
            setPositionX(posx => posx +1 )
        }
        switch(e.key){
            case 'ArrowLeft':
                setPositionX(posx => posx -1 )
                break;
            case 'ArrowRight':
                setPositionX(posx => posx +1 )
                break;
            case 'ArrowUp':
                setPositionY(posy => posy -1 )
                break;
            case 'ArrowDown':
                setPositionY(posy => posy +1 )
                break;
        }
    }
    
    return (
    <div className='Player'>{posx},{posy}</div>
    )
}
