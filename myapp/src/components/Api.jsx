import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

const Api = () => {
    var [user, setUser] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=> {
        console.log(response.data)
        setUser(response.data)
    })


  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Username</TableCell>
                          <TableCell>city</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val,i) => {
                          return (
                              
                              <TableRow>
                                  <TableCell key={i}>{val.name}</TableCell>
                                  <TableCell key={i}>{val.username}</TableCell>
                                  <TableCell key={i}>{val.address.city}</TableCell>
                              </TableRow>
                          
                      )})}

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

export default Api