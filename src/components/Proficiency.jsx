import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Proficiency({icon, text, sx = {}, ...others}) {
  return (
    <Box {...others} sx={{display: 'flex', gap: 1, alignItems: 'end', ...sx}}>
        <Box sx={{height: '25px', width:'25px'}} component="img" src={icon} />
        <Typography>
            {text}
        </Typography>
    </Box>
  )
}
