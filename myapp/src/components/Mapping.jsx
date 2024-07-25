import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'


const Mapping = () => {

    var [names, setname] = useState([
        { "name": "arjun", "age": 26 },
        { "name": "adheep", "age": 32 },
        { "name": "anjala", "age": 25 },
        { "name": "gayathri", "age": 22 },])



  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {names.map((val,i)=> { return (
                      
                        <TableRow>
                            <TableCell key={i}>{val.name}</TableCell>
                          <TableCell key={i}>{val.age}</TableCell> 
                       </TableRow>
                      )
                      }
                      )
                      }
                </TableBody>    
              </Table>
          </TableContainer>
    </div>
  )
}

export default Mapping