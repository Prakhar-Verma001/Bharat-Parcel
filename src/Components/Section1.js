import React from 'react'
import { Box, Stack, Typography, Grid } from '@mui/material'
import p8 from '../Assests/Images/Vectorp8.png'
import p7 from '../Assests/Images/Vectorp7.png'
import p6 from '../Assests/Images/Vectorp6.png'
import p5 from '../Assests/Images/Vectorp5.png'
import p4 from '../Assests/Images/Vectorp4.png'
import p3 from '../Assests/Images/Vectorp3.png'

const Section1 = () => {
  return (
    <>
        <Box bgcolor={'#0155A5'}>
            <Grid container>
              <Grid item lg={5} xs={12} p={{xl: 8, lg: 6, md: 4, xs: 3}}>
                  <Typography gutterBottom variant='h2' color={'white'} fontWeight={700}>
                    Trusted by Top companies
                  </Typography>
                  <Typography variant='body2' color={'white'} lineHeight={2} fontSize={'0.8rem'}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis 
                    eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque 
                    orci nec erat cursus, sed facilisis velit porttitor.
                  </Typography>
              </Grid>

              <Grid item lg={7} xs={12} p={{xl: 8, lg: 6, md: 4, xs: 3}}>
                <Box>
                    <Stack m={4} my={6} spacing={6} direction={{sm:'row', xs:'column'}} justifyContent={{md:'right', xs:'center'}}>
                      <img src={p3} alt='p3Image'/>
                      <img src={p4} alt='p4Image'/>
                    </Stack>

                    <Stack m={4} my={6} spacing={6} direction={{sm:'row', xs:'column'}} justifyContent={{md:'left', xs:'center'}}>
                      <img src={p5} alt='p5Image'/>
                      <img src={p6} alt='p6Image'/>
                    </Stack>

                    <Stack m={4} my={6} spacing={6} direction={{sm:'row', xs:'column'}} justifyContent={{md:'right', xs:'center'}}>
                      <img src={p7} alt='p7Image'/>
                      <img src={p8} alt='p8Image'/>
                    </Stack>
                </Box>
              </Grid>
            </Grid>
        </Box>
    </>
  )
}


export default Section1