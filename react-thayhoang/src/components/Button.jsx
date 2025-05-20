import React from 'react'

function Button({color, size,conten}) {

    const variant = size === "big" ? "btn-big": (size==="medium" ? "btn-medium" : "btn-smail")
  return (
    // size: 
    // trong props thif cos 1 property đặc biệt là children đóng vai trò làm phần tử con của Component 
    <button className={`${size}`} style={{background:color}}> {conten}</button>
  )
}

export default Button