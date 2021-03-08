import React from "react";

import "./CircleWidget.css";

import { useState } from "react";

export const CircleWidget = ({title ="",strokeWidth ="9",fillValue ="30",isRadioButton=false,isSelected=false, onClick, propColor="#6f6fff"}) => {
  return (
    <div className="circle-svg" >
      <svg viewBox="-4 -4 46 46">
        <path
          stroke="gray"
          strokeWidth="4.8"
          strokeOpacity="0.8"
          fill="none"
          stroke-dasharray="80, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>

        <path
          stroke="gray"
          strokeOpacity="0.5"
          strokeWidth="4.8"
          fill="none"
          stroke-dasharray="90, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>

        <path
          stroke="gray"
          strokeOpacity="0.3"
          strokeWidth="4.8"
          fill="none"
          stroke-dasharray="100, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>

        <path
          fill="none"
          strokeWidth={strokeWidth}
          stroke={isRadioButton && isSelected ? propColor :  isRadioButton && !isSelected ? "gray":propColor}
          stroke-dasharray={`${fillValue}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          onClick={onClick}
        ></path>
        <text x={8} y="20" style={{fontSize:"8px", fontWeight:"bold"}}> {title}</text>
      </svg>
    </div>
  );
};

// cx - R = 18
// R = 15.9155
// cy = 2.08

/*

<path
    d="
      M (CX - R), CY
      a R,R 0 1,0 (R * 2),0
      a R,R 0 1,0 -(R * 2),0
    "
/>
*/

/*
    <div className="circle-widget">
      <svg className="circle-widget-svg" width="100%" height="" viewBox="0 0 128 128">
        <path
          stroke="#c4c4c4"
          fill="none"
          stroke-width="4"
          stroke-dasharray="70, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <path
          stroke="#c4c4c4"
          strokeOpacity="0.6"
          fill="none"
          stroke-width="4"
          stroke-dasharray="85, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <path
          stroke="#c4c4c4"
          strokeOpacity="0.3"
          fill="none"
          stroke-width="4"
          stroke-dasharray="100, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>

        <path
          stroke="#6f6fff"
          fill="none"
          stroke-width="9.7"
          stroke-dasharray="30, 100"
          d="M18 2.0845 a 25.9155 25.9155 0 0 1 0 51.831 a 25.9155 25.9155 0 0 1 0 -51.831"
        ></path>
      </svg>
    </div>

    */
