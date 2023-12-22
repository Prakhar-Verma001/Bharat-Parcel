import React from 'react'
import { Box, Stack, Typography, Grid, Button, Card } from '@mui/material'
import icon1 from '../Assests/Images/icon1.png'
import icon2 from '../Assests/Images/icon2.png'
import icon3 from '../Assests/Images/icon3.png'
import icon4 from '../Assests/Images/icon4.png'

const Section4 = () => {
  return (
    <>
        <Box bgcolor={'#DBE5FF'} p={{lg: 6, sm: 4, xs: 2}}>
            <Stack direction={'column'} spacing={4}>
                <Box textAlign={'center'} px={{xl: 16, lg:12, md:10, sm:6, xs:3}}>
                    <Typography gutterBottom variant="h3" color="#1C2F41" fontWeight={600}>
                        How to Track Orders in BPS
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

                <Box px={{xl: 8, md: 6, sm: 4, xs: 2}}>
                   <Grid container columns={8}>
                     <Process
                     src={icon1}
                     alt='icon1'
                     heading='Enter your Order ID' 
                     para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Sed facilisis eleifend quam, non efficitur nisi mattis quis. '
                     />

                     <Process
                     src={icon2}
                     alt='icon2'
                     heading='Track your Order' 
                     para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Sed facilisis eleifend quam, non efficitur nisi mattis quis. '
                     />

                     <Process
                     src={icon3}
                     alt='icon3'
                     heading='Please wait, your order will arrive soon' 
                     para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Sed facilisis eleifend quam, non efficitur nisi mattis quis. '
                     />
                     
                     <Process
                     src={icon4}
                     alt='icon4'
                     heading='Your order has successfully arrived.' 
                     para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Sed facilisis eleifend quam, non efficitur nisi mattis quis. '
                     />
                     
                  </Grid> 
                </Box>
            </Stack>
        </Box>
    </>
  )
}


const Process = (props) => {
  return (
    <>
        <Grid item lg={2} md={4} xs={8} px={{xl:2, xs:0}} justifyContent={'center'}>
         <Stack direction={'row'} p={{md:3, xs:2}} justifyContent={'center'} 
         alignItems={'center'}>
          <Button sx={{p:0, textAlign:'left', textTransform:'none', borderRadius:5}}>
            <Card sx={{borderRadius:5, p:4, boxShadow:10}}>
             <Stack direction={'column'} spacing={2} justifyContent={'start'} alignItems={'start'}>
               <img src={props.src} alt={props.alt} />
               <Box>
                 <Typography gutterBottom lineHeight={1.5} variant="h6" fontWeight={700} color="#1C2F41">
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

export { Process }
export default Section4