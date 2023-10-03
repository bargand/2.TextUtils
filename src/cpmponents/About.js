import React from 'react'

export default function About(props) {
  return (
    <div className='main m-5' style={{ color: props.mode === "light" ? "black" : "white" }}>
      <h1>DUMMY ABOUT PAGE</h1>
    </div>
  )
}
