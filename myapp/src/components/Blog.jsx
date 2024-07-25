import { ThemeContext } from '@emotion/react'
import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

const Blog = () => {
    var [post, setpost] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        console.log(response.data)
        setpost(response.data)
    })

    return (
      
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                         {post.map((val) => {
                            return (

                                <TableRow>
                                    <TableCell >{val.id}</TableCell>
                                    <TableCell >{val.title}</TableCell>
                                </TableRow>

                            )
                        })}

                        <TableRow>
                            <TableCell ></TableCell>
                            <TableCell ></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
      
  )
}

export default Blog
