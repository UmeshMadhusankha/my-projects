import React from 'react'
import './ThreeDImageSlider.css'
import img1 from '../assets/3d1.jpg'
import img2 from '../assets/3d2.jpg'
import img3 from '../assets/3d3.jpg'
import img4 from '../assets/3d4.jpg'
import img5 from '../assets/3d5.jpg'
import img6 from '../assets/3d6.jpg'
import imgbg from '../assets/3dbg.png'

function ThreeDImageSlider() {
  return (
    <div className='ThreeD_whole_container'>
      <div className='ThreeD_container'>
        <div className='ThreeD_imgs' style={{ '--id' : '6'}}><img src={img1} /></div>
        <div className='ThreeD_imgs' style={{ '--id' : '5'}}><img src={img2} /></div>
        <div className='ThreeD_imgs' style={{ '--id' : '4'}}><img src={img3} /></div>
        <div className='ThreeD_imgs' style={{ '--id' : '3'}}><img src={img4} /></div>
        <div className='ThreeD_imgs' style={{ '--id' : '2'}}><img src={img5} /></div>
        <div className='ThreeD_imgs' style={{ '--id' : '1'}}><img src={img6} /></div>
      </div>
      <div className='ThreeD_bg'><img src={imgbg} /></div>
    </div>
  )
}

export default ThreeDImageSlider