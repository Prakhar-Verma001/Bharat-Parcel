import React from 'react'
import { Box, Stack, Typography, Grid, Card, List, ListItem, ListItemButton } from '@mui/material'
import Quest from '../Assests/Images/VectorQuestionMark.png' 

const Section7 = () => {
  return (
    <>
        
        <Box bgcolor={'#EAF0FF'}>
          <Grid container>
            <Grid item lg={5} xs={12}>
              <Box px={{xl:11, lg: 10, xs:3}} py={{xl: 15, lg:6, xs:5}} textAlign={{lg: 'left', xs:'center'}}>
                <Typography gutterBottom variant="h3" fontWeight={700} color="#1C2F41">
                  Why choose Bharat Parcel Services?
                </Typography>
                <Typography variant="body2" lineHeight={2} fontFamily={'0.8rem'} color="#1C2F41">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed facilisis eleifend quam, non efficitur nisi
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={7} xs={12}>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}
              height={1}>  
                <Box py={5} px={{ lg:18, md:14, sm:8, xs:4 }}>
                  <Card sx={{borderRadius:5, boxShadow:10, p:{md:2, xs:0}}}>
                  <List>
                    <ListItem>
                      <ListItemButton>
                        <Stack direction={'row'} spacing={2} alignItems={'center'}>
                          <img src={Quest} alt='Question_mark' />
                          <Typography color={'#1C2F41'} fontWeight={600}
                          variant='h6'>
                              How can i become a partner with BPS?
                          </Typography>
                        </Stack>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <Stack direction={'row'} spacing={2} alignItems={'center'}>
                          <img src={Quest} alt='Question_mark' />
                          <Typography color={'#1C2F41'} fontWeight={600}
                          variant='h6'>
                              How do i schedule a delivery?
                          </Typography>
                        </Stack>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <Stack direction={'row'} spacing={2} alignItems={'center'}>
                          <img src={Quest} alt='Question_mark' />
                          <Typography color={'#1C2F41'} fontWeight={600}
                          variant='h6'>
                              Do you operate 24/7?
                          </Typography>
                        </Stack>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <Stack direction={'row'} spacing={2} alignItems={'center'}>
                          <img src={Quest} alt='Question_mark' />
                          <Typography color={'#1C2F41'} fontWeight={600}
                          variant='h6'>
                              Can i track my orders?
                          </Typography>
                        </Stack>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  </Card>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
    </>
  )
}

export default Section7