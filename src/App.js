import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
     <>
   
<Navbar title="TextUtils" />
{/* This is props , now we can have a dynamic title and rendering */}
<div className="container my-3">

{/* <TextForm Heading = "Enter your text here "/> */}
<About />
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
