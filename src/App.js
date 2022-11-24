import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextField from './components/TextField';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      // setInterval(() => {
      //   document.title = "Install Textutils Now";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Textutils is an awesome utility";
      // }, 1000)
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
      <Router>
        <Navbar title="Textutils" mode={mode} switchMode={switchMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextField mode={mode} btn={btn} showAlert={showAlert} />}></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
