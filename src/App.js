import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';
// import About from './Components/About.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');

  const [alert,setalert]= useState(null);

  const showalert = (message, type) => {
    setalert({
      msg :message,
      type : type
    })

    setTimeout( ()=> {
      setalert(null);
    },1500)
  }

  const ToggleMode = () =>{
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='black';
      showalert("Dark mode has been enabled" , "success");
      document.title ='TextUtils -Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showalert("Light mode has been enabled" , "success");
      document.title ='TextUtils -Light Mode';
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={ToggleMode} />
      <strong><Alert alert={alert}/></strong>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <TextForm showalert={showalert} heading="Enter the text to analyze" mode={Mode} />
          {/* </Route> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
