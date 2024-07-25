import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {

    return (
      
        <div>
            <h1>Login page</h1>

            <TextField label="username" id="" variant='outlined' /><br /><br />
            <TextField label="password" id="" variant='outlined' /><br /><br />
            <Button variant='contained'>LOG IN</Button>

        </div>
        
  )
}

export default Login