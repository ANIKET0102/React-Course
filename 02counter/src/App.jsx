import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log("Clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  const removeValue = () => {
    // console.log("Clicked", counter);
    // counter = counter - 1;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Coundter value: {counter} </h2>
      <button onClick={addValue}> Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}> Remove Value</button>
    </>
  );
}

export default App;
