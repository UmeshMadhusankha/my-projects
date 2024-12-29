import React from 'react'
import ShadowCircle from './Components/ShadowCircle'
import GradientCollection from './Components/GradientCollection'
import Gradients from './Components/Gradients'
import AnimatedTopic from './Components/AnimatedTopic'
import Parallax from './Components/Parallax'
import AnimateOnScroll from './Components/AnimateOnScroll'
import Typewritter from './Components/Typewritter'
import ThreeDImageSlider from './Components/ThreeDImageSlider'
import ConicGradientAnimation from './Components/ConicGradientAnimation'


const styles = { 
  container: {
  }
}

/*<ShadowCircle />
      <ThreeDImageSlider />
      <Typewritter />
      <AnimateOnScroll />
      <Gradients />
      <GradientCollection />
      <AnimatedTopic />
      <ConicGradientAnimation />
*/

function App() {
  return (
    <div style={styles.container}>
      
      <Parallax />
      
    </div>
  )
}

export default App