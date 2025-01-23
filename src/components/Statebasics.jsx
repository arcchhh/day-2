import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var[fname,setFname]=useState("archh");
    const changeName=()=>{
        setFname("blah")
    }
  return (
    <div
      style={{textAlign:'center',marginTop:'5%'}}>
      <Typography variant='h3'>Helloo {fname}</Typography>
      <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebasics
