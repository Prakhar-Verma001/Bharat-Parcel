import React from 'react'
import { Box, Stack, Typography, Grid, Button, Card } from '@mui/material'

const Section5 = () => {
  return (
    <>
        <Box bgcolor={'#EAF0FF'} p={{lg: 6, sm: 4, xs: 2}}>
            <Stack direction={'column'} spacing={4}>
                <Box textAlign={'center'} px={{xl: 16, lg:12, md:10, sm:6, xs:3}}>
                    <Typography gutterBottom variant="h3" color="#1C2F41" fontWeight={600}>
                        Stats For parcel Delivery
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

                <Box px={{xl: 10, md: 6, sm: 4, xs: 2}}>
                   <Grid container columns={8}>
                       <Count 
                       head1='95%'
                       head2='+'
                       para='on-time delivery rate'
                       />

                       <Count 
                       head1='2600'
                       head2='+'
                       para='deliveries per month'
                       />

                       <Count 
                       head1='5'
                       head2='-Star'
                       para='reviews from the clients'
                       />

                       <Count 
                       head1='2M'
                       head2='+'
                       para='happy costumers'
                       />
                  </Grid> 
                </Box>
            </Stack>
        </Box>
    </>
  )
}

// I have to change in this and convert Into Count component ------------------
const Count = (props) => {
  return (
    <>
        <Grid item lg={2} md={4} xs={8} justifyContent={'center'}>
            <Stack direction={'row'} p={3} justifyContent={'center'} 
            alignItems={'center'}>
                <Button sx={{p:0, textAlign:'left', textTransform:'none', 
                borderRadius:5, width:'100%'}}>
                  <Card sx={{borderRadius:5, p:4, boxShadow:10, width:'100%'}}>
                     <Box textAlign={'center'}>
                       <Typography mb={1} variant="h3" fontWeight={700} color="#1C2F41">
                         {props.head1}<span style={{color:'#2FB95D'}}>{props.head2}</span>
                       </Typography>
                       <Typography variant="body2" color={'#666666'} lineHeight={1.5} 
                       fontFamily={'0.8rem'} fontWeight={600}>
                         {props.para}
                       </Typography>
                     </Box>
                  </Card>
                </Button>
            </Stack>  
        </Grid>
    </>
  )
}

export { Count }
export default Section5