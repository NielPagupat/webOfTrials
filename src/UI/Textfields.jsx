import React, { useEffect, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
export default function Textfields({chooseValue}) {
    const chkData = (ev) => {
        chooseValue(ev.target.value)
    }
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column'}}>
        <h3>Text Fields</h3>
        <TextField sx={{mt:1}} id="outlined-basic" label="Outlined" variant="outlined" onChange={chkData}/>
        <TextField sx={{mt:1}} id="filled-basic" label="Filled" variant="filled" onChange={chkData}/>
        <TextField sx={{mt:1}} id="standard-basic" label="Standard" variant="standard" onChange={chkData}/>
        
    </Box>
    
    </>
  )
}
