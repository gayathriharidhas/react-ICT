import React, { useEffect, useState } from 'react'
import { Typography,Button } from '@mui/material'




const Abc = () => {
    var [text, settext] = useState("")
    
    const react = () => {
        settext("React")
    }

    const Angular = () => {
        settext("Angular")
    }

    const View = () => {
        settext("View")
    }

    useEffect (() => { Angular() }, [])
        
    
        


    return (
        <div>
            <Typography variant="h3">welcome {text}</Typography>
            <Button variant="contained" onClick={react}>REACT</Button>
            <Button variant="contained" onClick={Angular}>ANGULAR</Button>
            <Button variant="contained" onClick={View}>VIEW</Button>
        </div>
    )


}
export default Abc