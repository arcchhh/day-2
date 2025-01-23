import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Archana j dev</h1>
      <input type="text" placeholder='Username'/>
      <br  />
      <button>login</button>
       <br  /><br  /><br  />
       <Typography variant='h1'>ARCHANA J DEV</Typography>
          <TextField label="username" variant="outlined"></TextField><br /><br />
          <TextField label="username" variant="standard"></TextField><br /><br />
          <TextField label="username" variant="filled"></TextField>  <br /><br />
          <Button variant="contained">Login</Button><br /><br />
          <Button variant="text">Login</Button><br /><br />
          <Button variant="outlined">Login</Button><br /><br />
          


          </div>
  )
}

export default First
