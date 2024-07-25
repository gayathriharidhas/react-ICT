import React, { useState } from 'react'
import { Typography,Button } from '@mui/material'



const Counter = () => {
    var [ number, setnum ] = useState(0)
    
    const add = () => {
        setnum(number+1)
    }

    const sub = () => {
        setnum(number-1)
    }


  return (
      <div>
          <Typography variant='h4'>number: {number}</Typography>
          <Button variant='contained' onClick={add} >+</Button>
          <Button variant='contained' onClick={sub} >-</Button>
      </div>
      
  )
    
}

export default Counter