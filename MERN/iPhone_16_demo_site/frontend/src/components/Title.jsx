import React from 'react'
import bgVid from '../assets/iPhone16.mp4'

function Title() {
    const styles = {
        bg: {
            padding: '10px',
            backgroundColor: '#000',
            height: '85vh',
            position: 'relative',
            top: '-30px',
            zIndex: '1'
        },
        title: {
            fontSize: '5rem',
            textAlign: 'center',
            margin: '50px',
            color: '#e0e0e0',
            textShadow: '0 0 5px rgba(0, 0, 50, 0.8)'
        },
        description: {
            color: 'wheat',
            textAlign: 'center',
            fontSize: '1.2rem',
            padding: '15px',
            textShadow: '0 0 2px rgba(0, 0, 0, 0.8)'
        },
        bgVideo : {
            position: 'absolute',
            top: '5px',
            left: '0',
            height: '90vh',
            width: '100vw',
            objectFit: 'cover', 
            filter: 'blur(8px)'
        },
        text_container: {
            position: 'relative',
            zIndex: '1'
        }
    }

    return (
        <div style={styles.bg}>
            <video style={styles.bgVideo} autoPlay muted loop>
            <source src={bgVid} type="video/mp4" /> 
                Your browser does not support HTML5 video.
            </video>
            <div style={styles.text_container}>
                <h1 style={styles.title}>iPhone 16</h1>
                <div style={styles.description}>
                    All you need to know about the exclusive product <br/>
                    <b>The iPhone 16</b> <br/> <br/>
                    Scroll down, Gather info  <br/>
                    and <br/>
                    Have Fun...!!!
                </div>
            </div>
        </div>
    )
}

export default Title