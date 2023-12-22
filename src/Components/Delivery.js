import React from 'react'
import { Box, Grid, Paper, Stack, Typography, Button } from '@mui/material'
import map from '../Assests/Images/Group 1171275077map.png'
import kg from '../Assests/Images/Frame 1171275516101kg.png'
import inch from '../Assests/Images/Frame 1171275518123in.png'
import km from '../Assests/Images/Frame 117127552051km.png'
import min from '../Assests/Images/Frame 117127552290min.png'
import d1 from '../Assests/Images/Vectord1.png'
import d2 from '../Assests/Images/Vectord2.png'
import d3 from '../Assests/Images/Vectord3.png'
import d4 from '../Assests/Images/Vectord4.png'

const Delivery = () => {
  return (
    <>
        <Box bgcolor={'#CECFD5'} px={{xl:35, lg:25, md:15, sm:5, xs:2}} py={8}>
            <Box>
                <Grid container>
                    <Grid item lg={6} xs={12} py={2} px={{md:2, xs:0}}>
                      <Stack direction={'column'} spacing={3} height={1} justifyContent={'space-between'}> 

                        <Paper sx={{bgcolor:'#0155A5', borderRadius:5, p:3}}>
                            <Stack direction={'column'} spacing={4}>
                                <Box>
                                    <Typography variant="h5" color="white" fontWeight={600}>
                                        #127777489-DL-NY
                                    </Typography>
                                    <Button sx={{bgcolor:'white', color:'#0155A5', width:1, 
                                    py:1, mt:3, textTransform:'none','&:hover': {
                                        backgroundColor: '#E0F4FF'
                                      }, borderRadius:5}}>
                                        Out for Delivery
                                    </Button>
                                </Box>

                                <Box>
                                    <Stack direction={'column'} spacing={3}>
                                        
                                        <Stack direction={'row'}>
                                            <Box>
                                                <Typography gutterBottom variant='subtitle1' color={'white'} 
                                                fontWeight={600}>
                                                    Package has left Courier Facility
                                                </Typography>
                                                <Typography variant='body1' fontSize={'0.8rem'} 
                                                color={'white'}>
                                                    San Francisco, California
                                                </Typography>
                                            </Box>
                                        </Stack>
                                        
                                        <Stack direction={'row'}>
                                            <Box>
                                                <Typography gutterBottom variant='subtitle1' color={'white'} 
                                                fontWeight={600}>
                                                    Package arrived at Local Facility
                                                </Typography>

                                             <Typography variant='body1' fontSize={'0.8rem'} 
                                                color={'white'}>
                                                    NEW YORK CITY, NEW YORK
                                                </Typography>
                                            </Box>
                                        </Stack>

                                        <Stack direction={'row'}>
                                            <Box>
                                                <Typography gutterBottom variant='subtitle1' color={'white'} 
                                                fontWeight={600}>
                                                    Out for Delivery
                                                </Typography>
                                                <Typography variant='body1' fontSize={'0.8rem'} 
                                                color={'white'}>
                                                    NEW YORK CITY, NEW YORK
                                                </Typography>
                                            </Box>
                                        </Stack>
                                        
                                        <Stack direction={'row'}>
                                            <Box>
                                                <Typography gutterBottom variant='subtitle1' color={'white'} 
                                                fontWeight={600}>
                                                    Delivered
                                                </Typography>

                                                <Typography variant='body1' fontSize={'0.8rem'} 
                                                color={'white'}>
                                                    1567 DOVE STREET, NEW YORK CITY, 9888
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    
                                    </Stack>
                                </Box>
                            </Stack>
                        </Paper>

                        <Paper sx={{bgcolor:'#0155A5', borderRadius:5, p:3}}>
                            <Typography gutterBottom variant='subtitle1' color={'white'} 
                            fontWeight={600}>
                                Delivering at:
                            </Typography>

                            <Typography variant='body1' fontSize={'0.8rem'} color={'white'}>
                                Nehru Ganj nayi basti, Darshan Bhawan, near MAX Hospital, 
                                back of DPBS College, Anupshahr - 203390, Uttar Pradesh
                            </Typography>
                        </Paper>

                      </Stack> 
                    </Grid>

                    <Grid item lg={6} xs={12} py={2} px={{md:2, xs:0}}>
                       <Stack direction={'row'} justifyContent={{lg:'end', xs:'center'}}>
                            <img src={map} width={'80%'} alt='map' />
                       </Stack>  
                    </Grid>
                </Grid>

                <Grid container mt={4}>
                    <Grid item lg={3} md={6} xs={12} p={2}>
                        <Stack direction={'row'} justifyContent={'center'}>
                            <Paper sx={{py:2, px:5, borderRadius:5}}>
                                <Stack direction={'row'} alignItems={'start'} width={'fit-content'}>
                                    <img src={kg} alt='kg' />
                                    <img src={d1} alt='d1' />
                                </Stack>
                            </Paper>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} p={2}>
                        <Stack direction={'row'} justifyContent={'center'}>
                            <Paper sx={{py:2, px:5, borderRadius:5}}>
                                <Stack direction={'row'} alignItems={'start'} width={'fit-content'}>
                                    <img src={inch} alt='inch' />
                                    <img src={d2} alt='d2' />
                                </Stack>
                            </Paper>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} p={2}>
                        <Stack direction={'row'} justifyContent={'center'}>
                            <Paper sx={{py:2, px:5, borderRadius:5}}>
                                <Stack direction={'row'} alignItems={'start'} width={'fit-content'}>
                                    <img src={km} alt='km' />
                                    <img src={d3} alt='d3' />
                                </Stack>
                            </Paper>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} p={2}>
                        <Stack direction={'row'} justifyContent={'center'}>
                            <Paper sx={{py:2, px:5, borderRadius:5}}>
                                <Stack direction={'row'} alignItems={'start'} width={'fit-content'}>
                                    <img src={min} alt='min' />
                                    <img src={d4} alt='d4' />
                                </Stack>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>
  )
}

export default Delivery