import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 0
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const remValue = () => {
    console.log('hiii');
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React {counter}</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>ADD VALUE</button>
      <br />
      <button onClick={remValue}>REMOVE VALUE</button>
    </>
  );
}

export default App;
