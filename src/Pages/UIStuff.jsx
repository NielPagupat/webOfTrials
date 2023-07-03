import { Box, Paper, Typography, TextField } from '@mui/material'
import Textfields from '../UI/Textfields'
import React from 'react'
import { useState } from 'react'
import DatePicker from '../UI/DatePicker';

export default function UIStuff() {

    const [value, setValue] = useState();
    const chooseValue = (value) =>{
        setValue(value);
    }
  return (
    <Box sx={{p:5, display:'flex', flexDirection:'column'}}>
        <Paper sx={{flexGrow:1, display:'flex', alignItems:'center', flexDirection:'column', p:1}}>
            <h4>Values Show Up Here</h4>
            <TextField value={value} InputProps={{readOnly: false}}/>
        </Paper>
        <Paper sx={{mt:1, bgcolor:'gray', p:1, display:'flex'}}>
            <Box sx={{bgcolor:'white', p:2, m:2}}>
            <Textfields chooseValue={chooseValue}/>
            </Box>
            <Box sx={{bgcolor:'white', p:2, m:2}}>
            <DatePicker chooseValue={chooseValue}/>
            </Box>
        </Paper>

    </Box>
  )
}
