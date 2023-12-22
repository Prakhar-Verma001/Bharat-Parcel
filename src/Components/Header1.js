import React from 'react'
import { Box } from '@mui/material'
import Nav from './Nav'
import Header from './Header'

const Header1 = () => {
  return (
    <>
        <Box sx={{
            background: 'linear-gradient(180deg, rgba(1, 85, 165, 0.8) 0%, rgba(234, 240, 255, 0.8) 25.1%)'
        }}>
            <Nav />
            <Header />
        </Box>
    </>
  )
}

export default Header1