import { Button, TextField } from '@mui/material'
import React from 'react'

const RegForm = () => {
  return (
    <div>
      <TextField label="Name" variant="outlined">Name</TextField><br /><br />
      <TextField label="place" variant="outlined">place</TextField><br /><br />
      <TextField label="age" variant="outlined">age</TextField><br /><br />
      <TextField label="address" variant="outlined">address</TextField><br /><br />
      <TextField label="username" variant="outlined">username</TextField><br /><br />
      <TextField label="password" variant="outlined">password</TextField><br /><br />

     <Button>submit</Button>
      

    </div>
  )
}

export default RegForm
