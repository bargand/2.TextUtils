import React from 'react'

export default function Blog(props) {
  return (
    <div className='main m-5' style={{ color: props.mode === "light" ? "black" : "white" }}>
      <h1>DUMMY BLOGS PAGE</h1>
    </div>
  )
}
