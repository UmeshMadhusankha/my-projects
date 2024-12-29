import React from 'react'

const styles = {
    container: {
        
    },
    pattern1: {
        display: 'inline-block',
        margin: '10px',
        height: '200px',
        width: '200px',
        backgroundImage: 'repeating-linear-gradient(red,red 10px,blue 10px,blue 20px)'
    },
    pattern2: {
        display: 'inline-block',
        margin: '10px',
        height: '200px',
        width: '200px',
        backgroundImage: 'linear-gradient(to top left, blue,blue 20px,red 20px, red 40px,blue 40px)'
    },
    pattern3: {
        display: 'inline-block',
        margin: '10px',
        height: '200px',
        width: '200px',
        backgroundImage: 'radial-gradient(red,red 50%,blue 50%)'
    },
}

function Gradients() {
  return (
    <div style={styles.container}>
        <div style={styles.pattern1}></div>
        <div style={styles.pattern2}></div>
        <div style={styles.pattern3}></div>
    </div>
  )
}

export default Gradients