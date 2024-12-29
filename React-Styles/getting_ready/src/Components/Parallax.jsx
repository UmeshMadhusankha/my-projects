import React from 'react'
import cloud from '../assets/cloud.png'
import mountain1 from '../assets/mountain1.png'
import mountain2 from '../assets/mountain2.png'
import sun from '../assets/sun.png'
import treeline from '../assets/treeline.png'
import './Parallax.css'

// there are few ways to implement parallax effect
// we can use a library called "react spring"
// and also we can apply it manually as "kevin powell" shows
// (in here, keep in mind to set overflow-x to hidden in index.html)

function Parallax() {

  return (
    <div className='container'>
        <div className='parallax'>
            <img src={cloud} className='cloud-back'/>
            <img src={sun} className='sun'/>
            <img src={cloud} className='cloud-front'/>
            <img src={mountain1} className='mountain1'/>
            <img src={mountain2} className='mountain2'/>
            <img src={treeline} className='treeline'/>
        </div>
    </div>
  )
}

export default Parallax