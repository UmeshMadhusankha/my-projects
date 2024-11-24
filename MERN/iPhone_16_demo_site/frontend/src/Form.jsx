import React from 'react'
import { TextField, Button, Typography, Box, Container, Snackbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Form() {

    const [ name, setName ] = React.useState('')
    const [ email, setEmail ] = React.useState('')
    const [ credit, setCredit ] = React.useState('')

    const [ failed, setFailed ] = React.useState(false)
    
    const navigate = useNavigate()

    const handleClick = () => {
        axios.post('http://localhost:5000/ordered',{
            name: name,
            email: email,
            credit: credit
        })
        .then(() => {
            console.log('Ordering Process is Completed!')
            navigate('/')
        })
        .catch(error => {
            console.log('error :',error)
            setFailed(true)
        })
    }


    return (
        <Container sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center'
            }}
        >
            <Box sx={{ 
                width: '75vw', 
                height: '90vh', 
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                gap: 2
                }}
            >       <Container sx={{
                        background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
                        width: '75vw',
                        height: '85vh',
                        position: 'absolute',
                        borderRadius: 5,
                        zIndex: -1
                    }}/>
                    <Typography variant='h4' sx={{ 
                        fontWeight: 700,
                        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                        mb: 4
                    }}
                    >Enter Your Details</Typography>
                    <TextField id='name' label='Name' variant='outlined' required sx={{ width: '40vw'}} onChange={(e) => setName(e.target.value)}/>
                    <TextField id='email' label='E-mail' variant='outlined' type='email' required sx={{ width: '40vw'}} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField id='creditCard' label='Creditcard Number' variant='outlined' required type='number' sx={{ width: '40vw'}} onChange={(e) => setCredit(e.target.value)}/>
                    <Button variant='contained' sx={{ width: '20vw', p: 1, m: 2}} onClick={() => handleClick()}>Place the Order</Button>
            </Box>
            <Snackbar
                open={failed}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setFailed(false)}
                message={"Please fill the fields correctly!"}
                sx={{
                    '& .MuiSnackbarContent-root': {
                    backgroundColor: '#ff3511', 
                    color: '#fff', 
                },
                }}
            />
        </Container>
    )
}

export default Form