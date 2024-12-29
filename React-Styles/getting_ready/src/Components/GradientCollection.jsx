import React from 'react'

const styles = {
    container : {
        margin: '20px 0px',
        border: '1px solid black',
        height: '250px',
        position: 'relative'
    },
    one : {
        width: '150px',
        height: '150px',
        background: `radial-gradient(
          circle,
          rgba(255, 20, 147, 0.5) 10%,
          rgba(255, 20, 147, 0.3) 30%,
          rgba(255, 20, 147, 0.05) 60%,
          rgba(255, 20, 147, 0) 100%
        )`,
        borderRadius: '50%',
        filter: 'blur(3px)', 
        opacity: '0.8',
        position: 'absolute'
    },
    two : {
        width: '150px',
        height: '150px',
        background: `radial-gradient(
          circle,
          rgba(147, 250, 20, 0.6) 10%,
          rgba(147, 250, 20, 0.35) 30%,
          rgba(147, 250, 20, 0.06) 60%,
          rgba(147, 250, 20, 0) 100%
        )`,
        borderRadius: '50%',
        filter: 'blur(3px)', 
        opacity: '0.9',
        position: 'absolute',
        left: '25px',
        top: '50px'
    },
    three : {
        width: '150px',
        height: '150px',
        background: `radial-gradient(
          circle,
          rgba(23, 147, 255, 0.4) 10%,
          rgba(23, 147, 255, 0.2) 30%,
          rgba(23, 147, 255, 0.05) 60%,
          rgba(23, 147, 255, 0) 100%
        )`,
        borderRadius: '50%',
        filter: 'blur(3px)', 
        opacity: '1',
        position: 'absolute',
        left: '50px'
    },
}

function GradientCollection() {
  return (
    <div style={styles.container}> 
        <div style={styles.one}></div>
        <div style={styles.two}></div>
        <div style={styles.three}></div>
    </div>
  )
}

export default GradientCollection