import React from 'react'
import { Box, Stack, Typography, Button, Input } from '@mui/material'
import pic_1 from '../Assests/Images/imagepic_1.png'

const Header = () => {
  return (
    <>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
          <Box width={{lg:'45%', md:'70%', sm:'80%', xs:'100%'}} mt={{lg:8, md: 6, sm: 4, xs: 2}}>
              <Stack direction={'column'} px={2}>

                  <Typography variant='h2' fontSize={{lg:'5rem', md: '3.5rem', xs:'2.5rem'}} lineHeight={'1.1'} 
                  fontWeight={700} color={'white'} textAlign={{lg: 'left', md: 'center'}}>
                      <span style={{color: '#0155A5'}}>BHARAT</span> 
                      <span style={{color: '#1C2F41'}}> Parcel
                      Services Pvt Ltd.</span>
                  </Typography>

                  <Typography px={1} variant='body1' fontSize={'0.8rem'} lineHeight={'32px'} 
                  color={'#666666'} textAlign={'center'} mt={3} fontWeight={600}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur \
                      nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.
                  </Typography>

                  <Box mt={5}>
                    <form style={{width:'100%'}}>
                      <Stack direction={'row'} width={'100%'} sx={{bgcolor:'#739ABF', 
                      borderRadius: 8}}>

                          <Input disableUnderline type='text' id="outlined-basic" 
                          placeholder='Enter your order ID' label="Outlined" 
                          variant="outlined" sx={{bgcolor:'#739ABF', flexGrow:1, p:'12px', 
                          borderRadius: 8}}/>

                          <Button type='submit' variant='contained' sx={{color:'white', 
                          borderRadius: 8, boxShadow:5, px:{sm: 8, xs: 5}, fontWeight:700}}>Track</Button>

                      </Stack>
                    </form>
                  </Box>

                  <Stack direction={{sm:'row', xs:'column'}} alignItems={'center'} justifyContent={'center'} 
                  spacing={2} mt={6} mb={10}>
                    <img src={pic_1} alt='profiles' width={'50%'}/>
                    <Typography>
                      <Typography fontWeight={700} fontSize={'2.5rem'} variant='h4'>95K<span style={{color:'green'}}>+</span></Typography>
                      <Typography fontWeight={700} fontSize={'0.7rem'} variant='body2'>Joined in already<span style={{color:'green'}}>+</span></Typography>
                    </Typography>     
                  </Stack>
              </Stack>
          </Box>
      </Stack>
    </>
  )
}

export default Header