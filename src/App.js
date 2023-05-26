import './App.css';
import React, {useState} from "react";



function App() {
  const[Mode, setMode] = useState("light")
  const[tmode, settmode] = useState("Dark Mode")

  const toogle =()=>{
    // console.log("Hello world")
    if(Mode === "light")
    {
      setMode("dark")
      document.body.style.backgroundColor = "black";
      settmode("Light Mode")

    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      settmode("Dark Mode")


    }
  }
  return (
    <div>
      <div className="header">

        <h2 style={{
          color: Mode === "light"?"black":"white"
        }}>React Assignment</h2>
        <p  style={{
          color: Mode === "light"?"black":"white"
        }}>Create a react application which toggles the background color of the web page on every toggle </p>
      </div>
      <div className="main">
        <button onClick={toogle} >{tmode}</button>
      </div>

    
    </div>
  );
}

export default App;
