import React from 'react'

function intro_images({ onClick, style , url }) {

    const [isHovered, setIsHovered] = React.useState(false)

    const styles = {

        container: {
            position: 'absolute',
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            margin: '10px',
            borderRadius: '10px',
            cursor: 'pointer',
            width: isHovered ? `calc(${style.width} * 1.1)` : `${style.width}`,
            height: isHovered ? `calc(${style.height} * 1.1)` : `${style.height}`,
            left: isHovered ? `calc(${style.leftHovered})` : `${style.left}`
        },
    }

    return (
        <div style={{...style , ...styles.container }} 
            onClick={onClick} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    )
}

export default intro_images