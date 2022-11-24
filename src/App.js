import './App.css';
import Navbar from './components/Navbar';
import TextField from './components/TextField';
import About from './components/About';
import { useState } from 'react';

function App() {

  let defaultMode = "light";
  const [mode, setMode] = useState(defaultMode);

  let defaultSwitchMode = "Enable Dark Mode";
  const [switchMode, setSwitchMode] = useState(defaultSwitchMode);

  let defaultBtn = "dark";
  const [btn, setBtn] = useState(defaultBtn);

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      setSwitchMode("Enable Light Mode");
      document.body.style.backgroundColor = "#042740";
      setBtn("light");
    }
    else{
      setMode("light");
      setSwitchMode("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      setBtn("dark");
    }
  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} switchMode={switchMode} toggleMode={toggleMode} />
      <TextField mode={mode} btn={btn} />
      <About mode={mode} />
    </>
  );
}

export default App;
