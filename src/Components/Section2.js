import React from 'react'
import { Box, Grid, Stack, Typography, Card, Button } from '@mui/material'
import cloud from '../Assests/Images/Cloud Api.png'
import delv from '../Assests/Images/Delivery Truck.png'
import fserv from '../Assests/Images/Fast Service.png'
import serv from '../Assests/Images/Service.png'

const Section2 = () => {
  return (
    <>
        <Box bgcolor={'#DBE5FF'}>
          <Grid container>
            <Grid item xl={5} xs={12}>
              <Box px={{xl:11, lg: 10, xs:3}} py={{xl: 15, lg:6, xs:5}}  textAlign={{xl: 'left', xs:'center'}}>
                <Typography gutterBottom variant="h3" fontWeight={700} color="#1C2F41">
                  Why choose Bharat Parcel Services?
                </Typography>
                <Typography variant="body2" lineHeight={2} fontFamily={'0.8rem'} color="#1C2F41">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed facilisis eleifend quam, non efficitur nisi
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={7} xs={12}>
              <Box py={5} px={{ lg:18, md:14, sm:8, xs:4 }}>
                <Grid container columns={8} justifyContent={{lg:'start', xs:'center'}}>
                  <Feature
                  src={delv}
                  alt='delv_Image'
                  heading='Experienced driver' 
                  para='facilisis eleifend quam, non efficitur nisi mattis quis. ' 
                  />
                  <Feature
                  src={fserv}
                  alt='fserv_Image'
                  heading='Quick Delivery'
                  para='facilisis eleifend quam, non efficitur nisi mattis quis. ' 
                  />
                  <Feature
                  src={cloud}
                  alt='cloud_Image'
                  heading='Integration of API' 
                  para='facilisis eleifend quam, non efficitur nisi mattis quis. ' 
                  />
                  <Feature
                  src={serv}
                  alt='serv_Image'
                  heading='Outstanding service' 
                  para='facilisis eleifend quam, non efficitur nisi mattis quis. ' 
                  />
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </>
  )
}

const Feature = (props) => {
  return (
    <>
        <Grid item md={4} xs={8} justifyContent={'center'}>
         <Stack direction={'row'} p={3} justifyContent={'center'} 
         alignItems={'center'}>
          <Button sx={{p:0, textAlign:'left', textTransform:'none', borderRadius:5}}>
            <Card sx={{borderRadius:5, p:2.5, boxShadow:10}}>
             <Stack direction={'column'} spacing={1.5} justifyContent={'start'} alignItems={'start'}>
               <Icons src={props.src} alt={props.alt} />
               <Box>
                 <Typography lineHeight={1.5} variant="h6" fontWeight={700} color="#1C2F41">
                   {props.heading}
                 </Typography>
                 <Typography variant="body2" color={'#666666'} lineHeight={1.5} 
                 fontFamily={'0.8rem'} fontWeight={600}>
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

const Icons = (props) => {
  return (
    <>
      <Card sx={{bgcolor:'#0155A5', borderRadius:5, p:1.2, height:'40px', width:'40px'}}>
        <img src={props.src} width={'40px'} height={'40px'} alt={props.alt} />
      </Card>
    </>
  )
}

export {Feature, Icons}
export default Section2