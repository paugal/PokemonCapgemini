import { render } from "@testing-library/react";
import React, { Component, useEffect, useState  } from "react";
import '../styles/Player.sass'

export default function Player() {

    const [xoffset,setOffSetX] = useState(0);
    const [yoffset,setOffSetY] = useState(0);
    const [position, setPosition] = useState({x: 0, y:0})
    const [delta, setDelta] = useState(10);
    const limits = {minX: 0, maxX: 460, minY: 0, maxY: 460 }

    useEffect(()=> {
        //console.log("rendering por el useeffect")
        document.addEventListener('keydown',  detectKeyDown, true)
    }, [])

    useEffect(()=> {
        yoffset > limits.maxY ? setOffSetY(limits.maxY) 
        : yoffset < limits.minY ? setOffSetY(limits.minY) 
        : setOffSetY(yoffset)
     }, [yoffset])

    useEffect(()=> {
        xoffset > limits.maxX ? setOffSetX(limits.maxX) 
        : xoffset < limits.minX ? setOffSetX(limits.minX)
        : setOffSetX(xoffset)
    }, [xoffset])
    
    const moveTitleToDown = () => {
        setOffSetY(yoffset => yoffset + delta);
        setPosition(prevPreferences =>  {
            return { ...prevPreferences, y: prevPreferences.y + delta}
        })
    };
    const moveTitleToRight = () => {
        setOffSetX(xoffset => xoffset + delta);
        let aux = position
        aux.x += delta
        setPosition(position => aux)
    };
    const moveTitleToLeft = () => {
        setOffSetX(yoffset => yoffset - delta);
        let aux = position
        aux.x -= delta
        setPosition(position => aux)
    };
    const moveTitleToUp = () => {
        setOffSetY(yoffset => yoffset - delta);
        let aux = position
        aux.y -= delta
        setPosition(position => aux)
    };

    const detectKeyDown = (e: any) => {
        switch(e.key){
            case 'ArrowLeft':
                moveTitleToLeft()
                break;
            case 'ArrowRight':
                moveTitleToRight()
                break;
            case 'ArrowUp':
                moveTitleToUp()
                break;
            case 'ArrowDown':
                moveTitleToDown()
                break;
        }
    }

    return(
        <div>
        
        <h2
            style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            color: 'white',
            margin: '0px'
            }}
        >
            <div className='Player'>{position.x},{position.y}</div>
        </h2>
        <h2
            style={{
            position: "absolute",
            left: `${xoffset}px`,
            top: `${yoffset}px`,
            color: 'white',
            margin: '0px'
            }}
        >
            <div className='Player'>{xoffset},{yoffset}</div>
        </h2>
        </div>
    );
}