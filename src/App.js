import './App.css';
import React, { useState } from 'react'
import Input from './components/Input';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {

  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#090d38';
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };
  return (
    <>
      {/* <Router> */}
        <Navbar titleText="TextUtils" aboutText="About" theme={theme} changeMode={toggleTheme} />
        <Alert alert={alert} />
        {/* <Switch> */}
          {/* <Route exact path="/about">
                <About theme={theme} />
          </Route> */}
          {/* <Route exact path="/"> */}
            <div className="container my-3">
              <Input headingText="Enter your text to analyze" theme={theme} showAlert={showAlert} />
            </div>
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
