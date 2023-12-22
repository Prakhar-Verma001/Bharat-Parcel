import React from 'react'
import { Box, Typography } from '@mui/material'
import Nav from './Nav'
const Header2 = () => {
  return (
    <>
        <Box sx={{
            background: 'linear-gradient(180deg, rgba(1, 85, 165, 0.8) 0%, rgba(234, 240, 255, 0.8) 25.1%)'
        }}>
            <Nav />
            <Box textAlign={'center'} width={1}>
                <Typography variant="h3" fontWeight={800} color="#0155A5"
                sx={{
                    py:14
                }}>
                    About Our Logistics
                </Typography>
            </Box>
        </Box>
    </>
  )
}

export default Header2