import React from "react";
import "./Bag.css";
import ButtonBag from "./ButtonBag";

function Bag(props: any) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="container">
          <div className="Item Item1"><ButtonBag></ButtonBag></div>
          <div className="Item Item2"><ButtonBag></ButtonBag></div>
          <div className="Item Item3"><ButtonBag></ButtonBag></div>

          <div className="Item Item4">
            <button onClick={() => props.setTrigger(false)}>close</button>
          </div>

        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Bag;
