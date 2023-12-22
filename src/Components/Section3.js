import React from 'react'
import { Box, Stack, Typography, Grid, Card, Button } from '@mui/material'
import { Icons } from './Section2'
import Navigation from '../Assests/Images/Navigation arrow.png'
import Route from '../Assests/Images/Route.png'
import Temp from '../Assests/Images/Temperature.png'
import Del from '../Assests/Images/Delivery.png'
 
const Section3 = () => {
  return (
    <>
        <Box>
            <Stack direction={'column'} py={10} spacing={5}>
                <Box textAlign={'center'} px={{xl: 16, lg:12, md:10, sm:6, xs:3}}>
                  <Typography gutterBottom variant="h3" color="#1C2F41" fontWeight={600}>
                      The BPS delivery service
                  </Typography>
                  <Typography variant='body2' fontSize={'0.8rem'} lineHeight={2} 
                  color={'#666666'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed facilisis eleifend quam, non efficitur nisi mattis quis. 
                      Vivamus scelerisque orci nec erat cursus, sed facilisis velit 
                      porttitor. Vestibulum ligula sapien, cursus sed consectetur nec, 
                      tincidunt ac metus. 
                  </Typography>
                </Box>
                <Box px={{lg:10, md:6, sm: 4, xs: 2}}>
                  <Grid container columns={8}>
                     <Service
                     src={Del}
                     alt='Delivery_Image'
                     head='STAT Deliveries' 
                     para='Lorem ipsum dolor sit amet, consectetur 
                     adipiscing elit. Sed facilisis eleifend quam.'
                     />

                     <Service
                     src={Temp}
                     alt='Tempreture_Image'
                     head='Cold Chain Logistics' 
                     para='Lorem ipsum dolor sit amet, consectetur 
                     adipiscing elit. Sed facilisis eleifend quam.'
                     />

                     <Service
                     src={Route}
                     alt='Route_Image'
                     head='Good and on-time service' 
                     para='Lorem ipsum dolor sit amet, consectetur 
                     adipiscing elit. Sed facilisis eleifend quam.'
                     />

                     <Service
                     src={Navigation}
                     alt='Navigation_Image'
                     head='Multi-State Solutions' 
                     para='Lorem ipsum dolor sit amet, consectetur 
                     adipiscing elit. Sed facilisis eleifend quam.'
                     />     
                  </Grid>
                </Box>
            </Stack>
        </Box>
    </>
  )
}

const Service = (props) => {
  return (
    <>
        <Grid item lg={4} xs={8}>
          <Stack direction={'row'} p={2} justifyContent={'center'} alignItems={'center'}>
            <Button sx={{p:0, textAlign:'left', textTransform:'none', borderRadius:5, 
            width:1}}>  
              <Card sx={{p:3, borderRadius:5, boxShadow:10, width:1}}> 
                <Stack direction={{md:'row', xs:'column'}} spacing={2} alignItems={'center'}>
                  <Icons src={props.src} alt={props.alt} />
                  <Box width={'100%'} textAlign={'left'}>
                    <Typography gutterBottom variant="h6" color="#1C2F41" fontWeight={600}>
                        {props.head}
                    </Typography>
                    <Typography variant='body2' fontSize={'0.8rem'} lineHeight={2} 
                    color={'#666666'}>
                        {props.para}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Button>
          </Stack>    
        </Grid>
    </>
  )
}

export {Service}
export default Section3