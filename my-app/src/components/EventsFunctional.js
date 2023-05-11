import React from 'react'

function EventsFunctional() {
  function clickHandler() {
    console.log('Clicked funktional Button')
  }
  return (
    <div>
        <button onClick={clickHandler}>Click-Me functional component</button>
    </div>
  )
}

export default EventsFunctional