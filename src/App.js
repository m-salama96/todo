import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, add2, add3, add4 } from "./features/counter/counterSlice";

import { useState } from "react";

function App() {
  const resultstat = useSelector((stat) => {
    return stat.calc.result;
  });
  const dispatch = useDispatch();
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);
  const [result, setResult] = useState(null);

  // EVENT HANDLERS
  function handleSumClick() {
    // const result = Number(firstNumberInput) + Number(secondNumberInput);
    // setResult(result);
    dispatch(
      add({
        name1: firstNumberInput,
        name2: secondNumberInput,
      }),
    );
  }

  function handleSubClick() {
    dispatch(
      add2({
        name1: firstNumberInput,
        name2: secondNumberInput,
      }),
    );
  }

  function handleMultClick() {
    dispatch(
      add3({
        name1: firstNumberInput,
        name2: secondNumberInput,
      }),
    );
  }

  function handleDivClick() {
    dispatch(
      add4({
        name1: firstNumberInput,
        name2: secondNumberInput,
      }),
    );
  }

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "teal",
        }}
      >
        {/* FIRST INPUT */}
        <label>First Number</label>
        <input
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        {/* SECOND INPUT */}
        <label>Second Number</label>
        <input
          value={secondNumberInput}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <button onClick={handleSumClick}>sum</button>

        <button onClick={handleSubClick}>subtract</button>

        <button onClick={handleMultClick}>multiply</button>

        <button onClick={handleDivClick}>divide</button>

        <hr />

        <h2>{resultstat}</h2>
      </div>
    </div>
  );
}

export default App;
