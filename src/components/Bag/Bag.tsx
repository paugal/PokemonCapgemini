import React from "react";
import "./Bag.css"

function Bag(props: any) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)} >close</button>
        <h3>holamundoiso</h3>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Bag;
