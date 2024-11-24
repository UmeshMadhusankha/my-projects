import React from 'react'

function NavbarItem({ item, onClick }) {
    const [isHovered, setIsHovered] = React.useState(false);

    const styles = {
        item: {
            color: (isHovered ? '#171717' : 'black'),
            backgroundColor: (isHovered ? '#77b1fc' : '#e0e0e0'),
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            minWidth: '50px',
            textAlign: 'center',
            fontWeight: '750',
            transition: 'background-color 0.5s ease'
        }
    }

    return (
        <>
            <div 
                style={styles.item}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
            >{item}</div>
        </>
    )
}

export default NavbarItem