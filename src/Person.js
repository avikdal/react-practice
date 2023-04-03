import React from 'react'

function Person({ individualData }) {
  return (
    <div>
      <h1>{individualData.firstName} {individualData.lastName}</h1>
    </div>
  )
}

export default Person