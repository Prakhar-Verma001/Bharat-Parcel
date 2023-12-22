import React from 'react'
import { Box, Stack, Typography, Card } from '@mui/material'
import gary from '../Assests/Images/Image Placeholdergary.png'
import vicki from '../Assests/Images/Image Placeholdervicki.png'
import marjorie from '../Assests/Images/Image Placeholdermarjorie.png'

const Section6 = () => {
  return (
    <>
        <Box bgcolor={'#EAF0FF'} p={{lg: 7, sm: 4, xs: 2}}>
            <Stack direction={'column'} spacing={4}>
                <Box textAlign={'center'} px={{xl: 16, lg:12, md:10, sm:6, xs:3}}>
                    <Typography gutterBottom variant="h3" color="#1C2F41" fontWeight={600}>
                        See what others people are saying
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

                <Box px={{xl: 20, md: 14, sm: 8, xs: 4}} sx={{position:'relative',
                display:'flex', height:{lg:'400px', sm:'800px', xs:'1000px'}, justifyContent:'center', alignItems:'center'}}>
                    <Box bgcolor={'#0155A5'} height={1} width={1} borderRadius={5}></Box> 
                    <Box display={'flex'} justifyContent={'space-around'} flexWrap={{lg: 'nowrap', xs: 'wrap'}} 
                    position={'absolute'} top={4} bottom={4} alignItems={'center'} px={{lg:8, xs:2.5}} gap={8}>
                        <Peoples
                        src={gary}
                        alt='gary_Image'
                        name='Gary Pollich'
                        proff='Future Group Facilitator'
                        para='Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Sed facilisis eleifend quam, non 
                        efficitur nisi mattis quis. Vivamus scelerisque orci 
                        nec erat cursus, sed facilisis velit porttitor.'
                        />

                        <Peoples
                        src={vicki}
                        alt='vicki_Image'
                        name='Vicki Rohan'
                        proff='Dynamic Usability Specialist'
                        para='Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Sed facilisis eleifend quam, non 
                        efficitur nisi mattis quis. Vivamus scelerisque orci 
                        nec erat cursus, sed facilisis velit porttitor.'
                        />

                        <Peoples
                        src={marjorie}
                        alt='marjorie_Image'
                        name='Marjorie Schinner'
                        proff='Corporate Markets Consultant'
                        para='Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Sed facilisis eleifend quam, non 
                        efficitur nisi mattis quis. Vivamus scelerisque orci 
                        nec erat cursus, sed facilisis velit porttitor.'
                        />
                    </Box>  
                </Box>
            </Stack>
        </Box>
    </>
  )
}


const Peoples = (props) => {
  return (
    <>
        <Card sx={{borderRadius:5, boxShadow:10, p:3}}>
            <Stack direction={'row'} spacing={3} alignItems={'center'}>
                <img src={props.src} alt={props.alt}/>
                <Box my={3}>
                    <Typography gutterBottom variant='h6' fontWeight={700}>
                        {props.name}
                    </Typography>
                    <Typography variant='body2' color={'#666666'} fontWeight={600} 
                    fontSize={'0.7rem'}>
                        {props.proff}
                    </Typography>
                </Box>
            </Stack>
            <Typography variant='body2' color={'#666666'} lineHeight={2} mt={3} 
            fontSize={'0.8rem'} fontWeight={600}>
                {props.para}
            </Typography>
        </Card>
    </>
  )
}

export {Peoples}
export default Section6