import "./App.css";

import React from "react";

import { PieChart } from "./PieChart";
import { Menu } from "./Menu";
import { CircleWidget } from "./CircleWidget";

import { useState } from "react";

function App() {
  const [selected, setSelected] = useState([true, false, false, false]);
  const [numbers, setNumbers] = useState([11, 55, 79, 90]);

  const [titles, setTitles] = useState(["360k", "400k", "120k", "90k"]);

  const changeState = (index) => {
    let states = [...selected];

    if (states[index] === true) return;
    let previousState = states[index];
    states[index] = !states[index];
    for (let i = 0; i < states.length; i++) {
      if (i !== index) {
        states[i] = previousState;
      }
    }
    setSelected([...states]);
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ width: "40px", display: "inline-block" }}>
          <CircleWidget
            isRadioButton
            propColor="pink"
            isSelected={selected[0]}
            onClick={() => changeState(0)}
            fillValue="100"
            key="0"
          />
          Andrew Hawk 140k <span>(55%)</span>
        </div>
        <div style={{ width: "40px" }}>
          <CircleWidget
            isRadioButton
            propColor="pink"
            isSelected={selected[1]}
            onClick={() => changeState(1)}
            fillValue="100"
            key="1"
          />
          66
        </div>
        <div style={{ width: "40px" }}>
          <CircleWidget
            isRadioButton
            propColor="pink"
            isSelected={selected[2]}
            onClick={() => changeState(2)}
            fillValue="100"
            key="2"
          />
          11
        </div>
        <div style={{ width: "40px" }}>
          <CircleWidget
            isRadioButton
            propColor="pink"
            isSelected={selected[3]}
            onClick={() => changeState(3)}
            fillValue="100"
            key="3"
          />
          99
        </div>
      </div>
      {selected.map((value, index) => {
        return value === true ? (
          <CircleWidget
            propColor="pink"
            fillValue={numbers[index]}
            key="0"
            title={titles[index]}
          />
        ) : null;
      })}
    </div>
  );
}

export default App;
