import React from 'react'
import { Box, Stack, Typography, Grid, Link, Button, Input } from '@mui/material'
import yt from '../Assests/Images/You tube.png' 
import tw from '../Assests/Images/Twitter.png' 
import ig from '../Assests/Images/Ig.png' 
import fb from '../Assests/Images/FB.png' 
import mail from '../Assests/Images/Group 61mail.png' 
import point from '../Assests/Images/Group 62point.png' 
import tel from '../Assests/Images/Group 63tel.png' 

const Section9 = () => {
  return (
    <>
        <Box bgcolor={'#0155A5'} p={{lg:8, md:6, xs:2}}>
            <Box>
                <Grid container>
                    <Grid item lg={3} md={6} xs={12} p={2} px={3}>
                    <Stack direction={'column'} spacing={4}>
                          <Box>
                          <Link href='#' underline='none'>
                              <Typography variant='h4' color={'white'} fontWeight={700}>
                                  Logo
                              </Typography>
                          </Link>
                          </Box>
                          <Stack direction={'column'} spacing={2}>
                            <Typography color={'white'} variant='body1' fontWeight={600} 
                            lineHeight={1.5}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Morbi sit amet neque tortor.
                            </Typography>
                          </Stack>
                          <Stack direction={'row'} alignItems={'center'} spacing={3}>
                            <Link href='#'><img src={yt} alt='youtube' /></Link>
                            <Link href='#'><img src={tw} alt='twitter' /></Link>
                            <Link href='#'><img src={ig} alt='Instagram' /></Link>
                            <Link href='#'><img src={fb} alt='facebook' /></Link>
                          </Stack>
                        </Stack>
                    </Grid>

                    <Grid item lg={2} md={6} xs={12} p={2} px={3}> 
                        <Stack direction={'column'} spacing={4}>
                            <Typography variant='h5' color={'white'} fontFamily={800}>
                                Quick Links
                            </Typography>
                            <Stack direction={'column'} spacing={2}>
                                <Link href='#' underline='none'>
                                    <Typography variant='body1' color={'white'} fontFamily={600}>
                                        About Us
                                    </Typography>
                                </Link>

                                <Link href='#' underline='none'>
                                    <Typography variant='body1' color={'white'} fontFamily={600}>
                                        Service
                                    </Typography>
                                </Link>

                                <Link href='#' underline='none'>
                                    <Typography variant='body1' color={'white'} fontFamily={600}>
                                        How to Track
                                    </Typography>
                                </Link>

                                <Link href='#' underline='none'>
                                    <Typography variant='body1' color={'white'} fontFamily={600}>
                                        Testimonial
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} p={2} px={3}>
                        <Stack direction={'column'} spacing={4}>
                            <Typography variant='h5' color={'white'} fontFamily={800}>
                                Contact Us
                            </Typography>

                            <Stack direction={'column'} spacing={2}>
                                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                  <img src={mail} alt='mail_Image' />
                                  <Typography variant='body1' color={'white'} fontWeight={600}>
                                    caarun@rediffmail.com
                                  </Typography>
                                </Stack>

                                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                  <img src={point} alt='point_Image' />
                                  <Typography variant='body1' color={'white'} fontWeight={600}>
                                    332, KUCHA GHASI RAM, FATEH PURI, 
                                    CHANDNI CHOWK DELHI DL 110006
                                  </Typography>
                                </Stack>

                                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                  <img src={tel} alt='tel_Image' />
                                  <Typography variant='body1' color={'white'} fontWeight={600}>
                                    +91 7017866149
                                  </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} p={2} px={3}>
                        <Stack direction={'column'} spacing={4}>
                            <Typography variant='h5' color={'white'} fontFamily={800}>
                                Newsletter
                            </Typography>

                            <Box>
                                <form style={{width:'100%'}}>
                                  <Stack direction={'row'} width={'100%'} sx={{bgcolor:'white', 
                                  borderRadius: 5}}>
                                
                                      <Input disableUnderline type='text' id="outlined-basic" 
                                      placeholder='Enter your email' label="Outlined" 
                                      variant="outlined" sx={{bgcolor:'white', flexGrow:1, p:2, 
                                      borderRadius: 5}}/>

                                      <Button type='submit' variant='contained' sx={{color:'white', 
                                      bgcolor:'#2FB95D',
                                      '&:hover': {
                                        backgroundColor: '#508D69'
                                      },
                                      borderRadius: 5, boxShadow:5, px:{md:5, xs:4}, 
                                      fontWeight:700}}>Subscribe</Button>

                                  </Stack>
                                </form>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </>
  )
}

export default Section9