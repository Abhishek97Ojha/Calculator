import React from 'react'
import './Button.css'
const Button = ({width,height,name,bgcolor}) => {
  return (
    <div className='button'>
        <button style={{width:`${width}`,height:`${height}`,backgroundColor:`${bgcolor}`}}>{name}</button>
    </div>
  )
}

export default Button