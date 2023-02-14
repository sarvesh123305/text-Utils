
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';
 import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
  const[btnText,setbtnTxt] = useState('dark');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      // if(btnText)
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
  return (
     <>
   
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText}  />
{/* This is props , now we can have a dynamic title and rendering */}
<Alert alert={alert}/>
<div className="container my-3">

<TextForm Heading = "Enter your text here " btnText={btnText} showAlert={showAlert}/>
{/* <About /> */}
</div>
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
