import React from 'react'
import './Typewritter.css'

function Typewritter({ text }) {
  return (
    <div className='typewritter_container'>
        <div className='typewritter_text'>
            { text }
        </div>
    </div>
  )
}

export default Typewritter