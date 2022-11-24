import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextField from './components/TextField';
import { useState } from 'react';

function App() {

  let defaultMode = "light";
  const [mode, setMode] = useState(defaultMode);

  let defaultSwitchMode = "Enable Dark Mode";
  const [switchMode, setSwitchMode] = useState(defaultSwitchMode);

  let defaultBtn = "dark";
  const [btn, setBtn] = useState(defaultBtn);

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setSwitchMode("Enable Light Mode");
      document.body.style.backgroundColor = "#042740";
      setBtn("light");
      showAlert("Dark Mode Enabled", "success");
      document.title = "Textutils - Dark Mode";
    }
    else {
      setMode("light");
      setSwitchMode("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      setBtn("dark");
      showAlert("Light Mode Enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} switchMode={switchMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextField mode={mode} btn={btn} showAlert={showAlert} />
    </>
  );
}

export default App;