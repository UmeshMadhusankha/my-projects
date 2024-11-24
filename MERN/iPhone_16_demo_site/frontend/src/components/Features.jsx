import React from 'react'

function Features({ url, onClick, topic }) {

    const [isHovered, setIsHovered] = React.useState(false)

    const styles = {
        container: {
            width: (isHovered ? '33vw' : '30vw'),
            height: (isHovered ? '44vh' : '40vh'),
            backgroundColor: 'cyan',
            borderRadius: '10px',
            display: 'inline-block',
            margin: '30px 10px',
            cursor: 'pointer',
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'np-repeat'
        },
        topic: {
            color: 'white',
            textAlign: 'center',
            fontSize: '150%',
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"

        }
    }

    return (
        <div>
            <div style={styles.container} 
                onClick={onClick} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            />
            <div style={styles.topic}>{topic}</div>
        </div>
    )
}

export default Features