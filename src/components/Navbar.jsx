import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{flexGrow:1}}>
        <AppBar position="static" style={{backgroundColor:"brown"}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>My App
                </Typography>
                <Button><Link to={'/'}style={{color:"white"}}>Fir</Link></Button>
                <Button><Link to={'/r'}style={{color:"white"}}>Reg</Link></Button>
                <Button><Link to={'/c'}style={{color:"white"}}>Ch</Link></Button>
                <Button><Link to={'/v'}style={{color:"white"}}>Task</Link></Button>
            </Toolbar>
                

        
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
