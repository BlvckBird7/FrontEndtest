import React from 'react'

const Button = (props) => {
  return (
    <button className={props.className}>{props.btnName}</button>
  )
}

export default Button