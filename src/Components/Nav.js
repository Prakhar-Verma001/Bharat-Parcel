import React from 'react'
import { Box, Stack, Typography, Button, Link } from '@mui/material'

const Nav = () => {
  return (
    <>
        <Box>
            <Stack p={4} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Link href='#' underline='none'>
                    <Typography variant='h4' color={'white'} fontWeight={700}>
                        Logo
                    </Typography>
                </Link>
                <Stack display={{md: 'flex', xs: 'none'}} direction={'row'} 
                alignItems={'center'} justifyContent={'space-between'} 
                width={{lg:'35%', xs:'50%'}}>
                    <Link href='#' underline='none'>
                        <Typography fontWeight={700} variant='subtitle1' 
                        color={'white'}>Home</Typography>
                    </Link>
                    <Link href='#' underline='none'>
                        <Typography fontWeight={700} variant='subtitle1' 
                        color={'white'}>About Us</Typography>
                    </Link>
                    <Link href='#' underline='none'>
                        <Typography fontWeight={700} variant='subtitle1' 
                        color={'white'}>Services</Typography>
                    </Link>
                    <Link href='#' underline='none'>
                        <Typography fontWeight={700} variant='subtitle1' 
                        color={'white'}>Contact Us</Typography>
                    </Link>
                </Stack>
                <Button variant="contained" sx={{bgcolor:'white', 
                color:'blue', px:3, borderRadius:3,  
                '&:hover': {bgcolor:'#EEF5FF'}}}>
                    Log In
                </Button>
            </Stack>
        </Box>
    </>
  )
}

export default Nav