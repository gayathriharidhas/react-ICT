import { Button, TextField,Typography } from '@mui/material'
import React, { useState } from 'react'


const Statebasics = () => {

    var [fname, setFname] = useState("gayathri")
    var [val, setval] = useState()

    

    const handleinput=(e) => {
        setFname(e.target.value)
    }

    const handleinputone = () => {
        setval(fname)    
    }
        
    return (
        
      
        <div>
            <Typography variant="h6">Welcome {val}</Typography>
            
            <TextField variant='outlined' onChange={handleinput}></TextField>

            <Button variant='contained' onClick={handleinputone}>Save</Button>
        </div>
  )
}

export default Statebasics