import React from 'react'
import { Box, Stack, Typography, Grid, Paper, Link, InputLabel, TextField, Button } from '@mui/material'
import yt from '../Assests/Images/You tube.png' 
import tw from '../Assests/Images/Twitter.png' 
import ig from '../Assests/Images/Ig.png' 
import fb from '../Assests/Images/FB.png' 
import mail from '../Assests/Images/Group 61mail.png' 
import point from '../Assests/Images/Group 62point.png' 
import tel from '../Assests/Images/Group 63tel.png' 

const Section8 = () => {
  return (
    <>
        <Box p={{lg:10, md:6, sm:2, xs:1}} bgcolor={'#EAF0FF'}>
            <Stack borderRadius={5} p={{lg:5, md:3, sm:2, xs:1}} spacing={8} sx={{
            background: 'linear-gradient(180deg, #E3EBFF 0%, rgba(219, 229, 255, 0) 79.37%)'
            }}>
                <Box textAlign={'center'} px={{xl: 10, lg:8, md:6, xs:3}}>
                    <Typography gutterBottom variant="h3" color="#1C2F41" fontWeight={600}>
                        Fill the form to contact us
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
              <Box>
                <Grid container>
                    <Grid item p={2} lg={5} xs={12}>
                      <Paper sx={{bgcolor: '#0155A5', p:{md:4, sm:3, xs:2}, 
                      borderRadius:5}}>
                        <Stack direction={'column'} spacing={4}>
                          <Box>
                            <Typography variant='h5' color={'white'} 
                            fontWeight={600} gutterBottom>
                              Contact Information
                            </Typography>
                            <Typography variant='body1' color={'white'} 
                            fontWeight={600}>
                                Sed facilisis eleifend quam, non efficitur 
                                nisi mattis quis
                            </Typography>
                          </Box>
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
                          <Stack direction={'row'} alignItems={'center'} spacing={3}>
                            <Link href='#'><img src={yt} alt='youtube' /></Link>
                            <Link href='#'><img src={tw} alt='twitter' /></Link>
                            <Link href='#'><img src={ig} alt='Instagram' /></Link>
                            <Link href='#'><img src={fb} alt='facebook' /></Link>
                          </Stack>
                        </Stack>
                      </Paper>
                    </Grid>
                    <Grid item p={2} lg={7} xs={12}>
                        <Paper sx={{p:{md:4, xs:2}, borderRadius:5}}>
                            <form>
                                <InputLabel htmlFor='Name' sx={{fontWeight:600, color:'#1C2F41', mb:1}}>Full name</InputLabel>
                                <TextField id="Name" variant="outlined" placeholder='Enter your full name' 
                                InputProps={{ sx: { borderRadius: 5 } }}
                                sx={{ width:1, mb:2 }} />

                                <InputLabel htmlFor='email' sx={{fontWeight:600, color:'#1C2F41', mb:1}}>Email</InputLabel>
                                <TextField id="email" variant="outlined" placeholder='Enter your email' 
                                InputProps={{ sx: { borderRadius: 5 } }}
                                sx={{ width:1, mb:2 }} />

                                <InputLabel htmlFor='Name' sx={{fontWeight:600, color:'#1C2F41', mb:1}}>Message</InputLabel>
                                <TextField id="Name" variant="outlined" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend 
                                quam, non efficitur nisi mattis quis. ' 
                                InputProps={{ sx: { borderRadius: 5 } }} multiline rows={2}
                                sx={{ width:1, mb:2 }} />

                                <Button sx={{bgcolor:'#2FB95D', fontWeight:600, 
                                color:'white', py:2, my:1, width:1, borderRadius:5,
                                '&:hover': {
                                  backgroundColor: '#508D69'
                                }
                                }}>
                                  Get Strated
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
              </Box>
            </Stack>
        </Box>
    </>
  )
}

export default Section8