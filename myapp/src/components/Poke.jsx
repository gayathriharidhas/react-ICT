import React, { useEffect, useState } from 'react'
import { Card, Typography, Button, CardMedia, CardContent, CardActions, Grid } from '@mui/material'
import axios from 'axios'



const Poke = () => {
    var[pokemo,setpokemon] = useState([])
    useEffect(() => {
        axios.get('https://dummyapi.online/api/pokemon')
            .then((response) => {
                console.log(response)
                setpokemon(response.data)
            })
        
    },[])


    return (
      
        <div>
            <Grid container spacing={2}>
                {pokemo?.map((val)=>{
                    return(

                        <Grid item xs={12} sm={6} md={4}>


                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.image_url}
                                    title={val.pokemon}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {val.abilities}
                                    </Typography>

                                
                                    <Typography variant="body2" color="text.secondary">
                                        {val.pokemon}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small">{val.id}</Button>
                                    <Button size="small">{val.type}</Button>
                                </CardActions>
                                
                            </Card>
                        </Grid>
                    )
                })}
                
            </Grid>

            


    </div>
  )
}

export default Poke