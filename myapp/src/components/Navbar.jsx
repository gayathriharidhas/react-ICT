
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
      
        <div>
            <AppBar>
                <Toolbar>
                    <Typography varient='h6' sx={{ flexGrow: 1 }}>MyApp</Typography>&nbsp;&nbsp;&nbsp;
                    <Link to='/sign'><Button variant='contained' color='error' style={{ color: 'white' }}>SignUp</Button></Link>
                    <Link to='/login'><Button variant='contained' color='error' style={{ color: 'white' }}>Login</Button></Link>
                    <Link to='/state'><Button variant='contained' color='error' style={{ color: 'white' }}>State</Button></Link>
                    <Link to='/count'><Button variant='contained' color='error' style={{ color: 'white' }}>Count</Button></Link>
                    <Link to='/react'><Button variant='contained' color='error' style={{ color: 'white' }}>React</Button></Link>
                    <Link to='/map'><Button variant='contained' color='error' style={{ color: 'white' }}>Map</Button></Link>
                    <Link to='/api'><Button variant='contained' color='error' style={{ color: 'white' }}>Api</Button></Link>
                    <Link to='/blog'><Button variant='contained' color='error' style={{ color: 'white' }}>Blog</Button></Link>
                    <Link to='/poke'><Button variant='contained' color='error' style={{ color: 'white' }}>Poke</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
  )
}

export default Navbar