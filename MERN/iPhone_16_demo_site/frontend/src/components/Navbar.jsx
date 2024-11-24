import React from 'react'
import NavbarItem from './NavbarItem'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const styles = {
        ul: {
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'flex-end',
            backgroundColor: 'black',
            padding: '5px'
        },
        li: {
            padding: '8px 3px'
        }
    }

    const navigate = useNavigate()

    return (
        <ul style={styles.ul}>
            <li style={styles.li}><NavbarItem item={"Order Now"} onClick={() => navigate('/order')}/></li>
        </ul>
    )
}

export default Navbar