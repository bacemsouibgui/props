import React from 'react'
import PropTypes from "prop-types"
const name="BACEM";

function ProfileComponent(props) {
  return (
    <div>
        <h1 className='name'>{props.fullname} </h1>
        <h2 className='bio'>{props.bio}</h2>
        <h3 className='profession'>{props.profession} </h3>
        <button className='but' onClick={()=>props.handleName(name)}>Click here </button>
    </div>
  )
}
ProfileComponent.defaultProps={
  fullname:"this is the default value",
  bio:"this is the default bio",
  profession:"this is the default profession"
}
ProfileComponent.prototype={
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func
    
  
}

export default ProfileComponent;