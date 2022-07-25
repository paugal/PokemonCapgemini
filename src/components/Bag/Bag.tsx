import React from "react";
import "./Bag.css"

function Bag(props: any) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="flex-container">
          <button className="close-btn" onClick={() => props.setTrigger(false)} >close</button>
          <button className="close-btn" >Pokedex</button>
          <button className="close-btn" >Items</button>
          <button className="close-btn" >Mapa</button>
          <button className="close-btn" >Reloj</button>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Bag;
