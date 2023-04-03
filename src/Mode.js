import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


function Mode() {
  const [mode, setMode] = useState("light")

  const handleClick = () => console.log("clicked")
  
  return (
    <div>
      {/* <button onClick={handleClick}>{mode}</button> */}
      <Button variant='light'onClick={handleClick}>{mode}</Button>
    </div>
  )
}

export default Mode
