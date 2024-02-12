import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);
  useEffect(() => {
    console.log(counter);
  }, [counter]);
  const addValue = () => {
    if (counter >= 20) {
      return;
    } else {
      counter = counter + 1;
      setcounter(counter);
      console.log(counter);
      // // counter = counter + 1;
      // // setcounter(counter);
      // // counter = counter + 1;
      // // setcounter(counter);
      // // counter = counter + 1;
      // // setcounter(counter);
      //  setcounter((prevcount) => prevcount + 1);
      // console.log("count value", counter);
      //setcounter((prevcounter) => prevcounter + 1);
      // setcounter((prevcounter) => prevcounter + 1);
      // setcounter((prevcounter) => prevcounter + 1);
    }
  };
  const removeValue = () => {
    if (counter <= 0) {
      return;
    }
    counter = counter - 1;
    setcounter(counter);
  };
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Default Counter:{counter}</h2>
      <button className="back_ground" onClick={addValue}>
        Add value
      </button>
      <br />
      <br />
      <button className="back_ground" onClick={removeValue}>
        Remove Value
      </button>
    </>
  );
}

export default App;
