import React from 'react'
import { Box, Stack, Grid, Typography, Button } from '@mui/material'
import parcel from '../Assests/Images/Imageparcel.png' 

const Pracel = () => {
  return (
    <>
        <Box bgcolor={'#DBE5FF'} p={{lg:8, md:4, xs:2}}> 
            <Grid container>
                <Grid item lg={6} xs={12} p={2} py={{md:2, xs:4}}>
                    <img src={parcel} alt='parcel' width={'95%'} 
                    style={{marginInline:'2.5%'}} />
                </Grid>
                <Grid item lg={6} xs={12} p={2}>
                    <Stack direction={'column'} spacing={{lg:5, md:4, xs:3}}>
                        <Box>
                            <Typography gutterBottom variant="h4" color="#1C1F35" fontWeight={600}>
                                Our Logistics Services
                            </Typography>
                            <Typography variant='body1' color="#666C89" fontWeight={500}>
                                Leverage agile frameworks to provide a robust synopsis for 
                                strategy foster collaborative thinking to further the overall 
                                value proposition.
                            </Typography>
                        </Box>

                        <Stack direction={'row'} spacing={2}>
                            <Button variant='contained' sx={{borderRadius:2,
                            px:{md:5, xs: 3}, py:{sm:2, xs:1}, bgcolor:'white', color:'#1C1F35',
                            textTransform:'none', fontWeight:600,
                            '&:hover': {
                                bgcolor: '#224A6F',
                                color: 'white'
                            }}}>
                                Our Approch
                            </Button>
                            <Button variant='contained' sx={{borderRadius:2,
                            px:{md:5, xs: 3}, py:{sm:2, xs:1}, bgcolor:'white', color:'#1C1F35',
                            textTransform:'none', fontWeight:600,
                            '&:hover': {
                                bgcolor: '#224A6F',
                                color: 'white'
                            }}}>
                                Our Approch
                            </Button>
                            <Button variant='contained' sx={{borderRadius:2,
                            px:{md:5, xs: 3}, py:{sm:2, xs:1}, bgcolor:'white', color:'#1C1F35',
                            textTransform:'none', fontWeight:600,
                            '&:hover': {
                                bgcolor: '#224A6F',
                                color: 'white'
                            }}}>
                                Our Approch
                            </Button>
                        </Stack>

                        <Typography variant='body1' color="#666C89" fontWeight={500}>
                            Sed ut perspiciatis, unde omnis iste natus error 
                            sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam eaque ipsa, quae ab illo 
                            inventore veritatis et quasi architecto beatae 
                            vitae dicta sunt, explicabo. Nemo enim ipsam 
                            voluptatem quia voluptassit.
                        </Typography>
                        
                        <Stack justifyContent={{lg: 'left', xs:'center'}}>
                            <Button variant='contained' sx={{textTransform:'none',
                            color:'white', width:'fit-content', px:5, py:2, 
                            borderRadius: 5}}>
                                Learn More
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default Pracel