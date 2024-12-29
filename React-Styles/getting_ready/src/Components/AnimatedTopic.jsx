import React from 'react'
import './AnimatedTopic.css'

const styles = {
    container: {
        width: '100%',
        textAlign: 'center'
    }
}

function AnimatedTopic() {
  return (
    <div style={styles.container}>
        <h1 className='topic'>Gradient Animation</h1>
    </div>
  )
}

export default AnimatedTopic