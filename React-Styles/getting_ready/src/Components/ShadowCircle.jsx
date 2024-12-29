import React from 'react'

const styles = {
    outerCircle: {
        backgroundColor: '#aadcb5',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircle: {
        backgroundImage: 'linear-gradient(45deg,#fff,#7abd87)',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadowCircle: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'inset -3px 4px 3px #700',
    },
}

function ShadowCircle() {
  return (
    <div style={styles.outerCircle}>
        <div style={styles.innerCircle}>
            <div style={styles.shadowCircle}></div>
        </div>
    </div>
  )
}

export default ShadowCircle