// import Button from "./Button";
// import styles from "./App.module.css";
import {useState, useEffect} from "react";
//  useEffect 한번만 실행하고 또 실행되는 것을 방지할 때 (ex) API

function Hello(){
  // function destoryedFn() {
  //   console.log("destroyed")
  // };
  // function effectFn() {
  //   console.log("creation!")
  //   return destoryedFn;
  // };
  // useEffect(effectFn, []);
  // useEffect(function () {
  //   console.log("Hi :)");
  //   return function() {
  //     console.log("bye :(")
  //   };
  // }, []);
  useEffect(() => {
    console.log("Hi :)")
    return console.log("bye :(")
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
