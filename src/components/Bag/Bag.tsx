import React from "react";
import "./Bag.css";
import ButtonBag from "./ButtonBag";

function Bag(props: any) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        
        <div className="flex-container">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <ButtonBag></ButtonBag>
          <ButtonBag></ButtonBag>
          <ButtonBag></ButtonBag>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Bag;
