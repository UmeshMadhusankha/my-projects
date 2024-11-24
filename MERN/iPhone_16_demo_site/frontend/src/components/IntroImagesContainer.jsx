import React, { useState } from 'react'
import IntroImages from './IntroImages'
import img1 from '../assets/intro_img1.webp'
import img2 from '../assets/intro_img2.webp'
import img3 from '../assets/intro_img3.webp'
import img4 from '../assets/intro_img4.webp'
import img5 from '../assets/intro_img5.webp'

function IntroImagesContainer() {

    const styles = {
        container: {
            backgroundColor: 'rgba(0,0,0, .8)',
            display: 'flex',
            marginTop: '10px',
            position: 'relative',
            top: '-5vh',
            alignItems: 'center',
            height: '65vh',
            padding: '25px'
        },
        first: {
            position: 'absolute',
            color: 'white',
            left: '7vw',
            leftHovered: '6.65vw',
            height: '12vw',
            width: '18vw',
            opacity: '0.75',
            transition: 'all 1 ease-in-out'
        },
        second: {
            position: 'absolute',
            color: 'white',
            left: '17vw',
            leftHovered: '16.85vw',
            height: '16vw',
            width: '24vw',
            zIndex: 1,
            opacity: '0.9',
            transition: 'all 1 ease-in-out'
        },
        third: {
            position: 'absolute',
            color: 'white',
            left: '33vw',
            leftHovered: '31.35vw',
            zIndex: '2',
            transition: 'all 1 ease-in-out',
            width: '30vw',
            height: '20vw'
        },
        fourth: {
            position: 'absolute',
            color: 'white',
            left: '54vw',
            leftHovered: '51.3vw',
            height: '16vw',
            width: '24vw',
            zIndex: 1,
            opacity: '0.9',
            transition: 'all 1 ease-in-out'
        },
        fifth: {
            position: 'absolute',
            color: 'white',
            left: '71vw',
            leftHovered: '68.85vw',
            height: '12vw',
            width: '18vw',
            opacity: '0.75',
            transition: 'all 1 ease-in-out'
        }
    }

// Declaring state variables required for the process
    const [index1, setIndex1] = useState("first");
    const [index2, setIndex2] = useState("second");
    const [index3, setIndex3] = useState("third");
    const [index4, setIndex4] = useState("fourth");
    const [index5, setIndex5] = useState("fifth");

// Declaring functions to determine the style of images
    const handleStyles1 = () => {
        if (index1 != "third") {
            setIndex1("third");
            setIndex2("fourth");
            setIndex3("fifth");
            setIndex4("first");
            setIndex5("second");
        }
    }

    const handleStyles2 = () => {
        if (index2 != "third") {
            setIndex1("second");
            setIndex2("third");
            setIndex3("fourth");
            setIndex4("fifth");
            setIndex5("first");
        }
    }

    const handleStyles3 = () => {
        if (index3 != "third") {
            setIndex1("first");
            setIndex2("second");
            setIndex3("third");
            setIndex4("fourth");
            setIndex5("fifth");
        }
    }

    const handleStyles4 = () => {
        if (index4 != "third") {
            setIndex1("fifth");
            setIndex2("first");
            setIndex3("second");
            setIndex4("third");
            setIndex5("fourth");
        }
    }

    const handleStyles5 = () => {
        if (index5 != "third") {
            setIndex1("fourth");
            setIndex2("fifth");
            setIndex3("first");
            setIndex4("second");
            setIndex5("third");
        }
    }

    return (
        <div style={styles.container}>
            <IntroImages style={styles[index1]} url={img1} onClick={handleStyles1}/>
            <IntroImages style={styles[index2]} url={img2} onClick={handleStyles2}/>
            <IntroImages style={styles[index3]} url={img3} onClick={handleStyles3}/>
            <IntroImages style={styles[index4]} url={img4} onClick={handleStyles4}/>
            <IntroImages style={styles[index5]} url={img5} onClick={handleStyles5}/>
        </div>
    )
}

export default IntroImagesContainer