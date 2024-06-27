 import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');    //whetehr dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils | DarkMode';
    }
    else{
      setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled", "success");
       document.title = 'TextUtils | LightMode';
    }
  }
  return (
    <>
    <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     {/* <Routes>
          <Route path="/">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </Route>
        </Routes> */}
         <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
     <div className="container my-3">
     </div>
     </Router>
    </>
  );
}

export default App;
