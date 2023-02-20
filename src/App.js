
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route, 
} from "react-router-dom";
import About from './components/About';
 import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
  const[btnText,setbtnTxt] = useState('dark');
  
  // const removeBackgroundClasses = () =>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  // }
  const toggleMode = (cls) => {
    // if(cls != null){
    //   removeBackgroundClasses();
    //   document.body.classList.add('bg-'+cls);
    //   return;
    // }
    // removeBackgroundClasses();
    
    if(mode === 'light'){
      console.log(cls);
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setbtnTxt('light');
      showAlert("Dark mode has been enabled",'success');
    }
    else{
      setMode('light');
      setbtnTxt('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled",'success');
    }
 
    
  }

  const[alert,setAlert] = useState(null);

  const showAlert = (msg,type) =>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() =>{ 
      setAlert(null)
    },1000);
  }

  // const[activeState,setactiveState] = useState(1);
  // const showActiveState = () =>{
      

  // }
  
  return (
     <>
  <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText}   />
{/* This is props , now we can have a dynamic title and rendering */}
<Alert alert={alert}/>
<div className="container my-3">
 <Routes>
    {/* <Route exact path="/about" component={About}> */}
      <Route exact path="/" element={<TextForm Heading = "Enter your text here " btnText={btnText} showAlert={showAlert}/>} / >
      <Route exact path="/about" element={<About btnText={btnText}/>} />

   </Routes> 
</div>
</Router>
     </>
    );
}

Navbar.propTypes = {
  title:PropTypes.string.isRequired,
  about:PropTypes.string.isRequired,};

Navbar.defaultProps = {
  title : "Set Title here",
  about : "About "
}
TextForm.propTypes = {
  Heading : PropTypes.string,
}
TextForm.defaultProps = {

}
export default App;
