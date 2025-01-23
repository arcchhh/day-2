import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Task = () => {
     var[val,setVal]=useState("")
        const changetoH=()=>{
            setVal("Home")
        }
        const changetoG=()=>{
            setVal("gallery")
        }
        const changetoC=()=>{
            setVal("contact")
        }
  return (
    <div
      style={{textAlign:'center',marginTop:'5%'}}>
      <Typography variant='h3'>welcome to {val}</Typography><br />
      <Button variant='contained' onClick={changetoH}>Home</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={changetoG}>gallery</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={changetoC}>contact</Button>&nbsp;&nbsp;

    </div>
  )
}

export default Task
