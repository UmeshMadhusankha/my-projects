import React, { forwardRef } from 'react'

const FeaturesExplained = forwardRef(({ id , url, desc }, ref ) => {
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            margin: '55px 10px',
            padding: '35px',
            flexDirection: (id % 2 == 0) ? 'row-reverse' : 'row',
        },
        image: {
            width: '35vw',
            height: '35vh',
            backgroundImage: `url(${url})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'transparent'
        },
        text: {
            margin: '15px',
            color: '#ffe',
            display: 'flex',
            width: '55vw',
            justifyContent: 'center'
        }
    }

    return (
        <div style={styles.container} ref={ref}>
            <div style={styles.image}></div>
            <div style={styles.text}>
                {desc}   
            </div>       
        </div>
    )
});

export default FeaturesExplained