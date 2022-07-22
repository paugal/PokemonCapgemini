import { render } from "@testing-library/react";
import React, { Component, useEffect, useState  } from "react";
import Player from "./Player";


export default function Player2() {

    const [xoffset,setOffSetX] = useState(0);
    const [yoffset,setOffSetY] = useState(0);
    const [delta, setDelta] = useState(10);

    useEffect(()=> {
        console.log("rendering por el useeffect")
        document.addEventListener('keydown',  detectKeyDown, true)
    }, [])

    
    
    const moveTitleToDown = () => {
        setOffSetY(yoffset => yoffset + delta);
    };
    const moveTitleToRight = () => {
        setOffSetX(xoffset => xoffset + delta);
    };
    const moveTitleToLeft = () => {
        setOffSetX(yoffset => yoffset - delta);
    };
    const moveTitleToUp = () => {
        setOffSetY(yoffset => yoffset - delta);
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
            left: `${xoffset}px`,
            top: `${yoffset}px`,
            color: 'white'
            }}
        >
            <Player/>
        </h2>


        <div style={{ marginTop: "80px" }}>
            <button onClick={moveTitleToRight}>
            &#8594;
            </button>
            <button onClick={moveTitleToDown}>
            &#8595;
            </button>
            <button onClick={moveTitleToLeft}>
            &#8592;
            </button>
            <button onClick={moveTitleToUp}>
            &#8593;
            </button>
        </div>
        </div>
    );
}