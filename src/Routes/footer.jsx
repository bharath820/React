import React from 'react'
import { Navigate } from 'react-router-dom'

const footer = () => {
    function handleClick(){
        Navigate("./About.jsx")
    }
  return (
    <div>
      <h1>Footer</h1>

      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default footer
