import React from 'react'

function Alert(props) {
  const capitalize = (word) =>{
    const lower =  word.toString();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {/*  */}
   <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg} 
    {/* <button type="button" class="btn-close float-right" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
  )
}

export default Alert;
