import React from 'react'
import { Box, Stack, Typography, Button, Grid } from '@mui/material'
import bt from '../Assests/Images/Iconbt.png'
import wh from '../Assests/Images/Iconwh.png'
import ar from '../Assests/Images/Iconar.png'
import xh from '../Assests/Images/Iconxh.png'
import trk from '../Assests/Images/Icontrk.png'
import ppl from '../Assests/Images/Iconppl.png'

const Logicstics = () => {
  return (
    <>
        <Box bgcolor={'#EAF0FF'} py={8} px={{lg:12, md: 8, sm: 4, xs:2 }}>
            <Stack direction={'column'} spacing={5}>
                <Typography variant="h4" textAlign={'center'} color="#1C1F35" fontWeight={600}>
                    Our Logistics Services
                </Typography>
                <Box>
                    <Grid container>
                        <Ship 
                        src={bt}
                        alt='boat'
                        heading='Sea Transport Services'
                        para='Following the quality of our 
                        service thus having gained trust of our many clients.'/>

                        <Ship 
                        src={wh}
                        alt='warehouse'
                        heading='Warehousing Services'
                        para='Following the quality of our 
                        service thus having gained trust of our many clients.'/>

                        <Ship 
                        src={ar}
                        alt='airplain'
                        heading='Air Fright Services'
                        para='Following the quality of our 
                        service thus having gained trust of our many clients.'/>

                        <Ship 
                        src={xh}
                        alt='Exhibition'
                        heading='Project & Exhibition'
                        para='Following the quality of our 
                        service thus having gained trust of our many clients.'/>

                        <Ship 
                        src={trk}
                        alt='truck'
                        heading='Local Shipping Services'
                        para='Following the quality of our 
                        service thus having gained trust of our many clients.'/>

                        <Ship 
                        src={ppl}
                        alt='people'
                        heading='Customer Clearance'
                        para='Following the quality of our 
                        service thus having gained trust of our many clients.'/>

                    </Grid>
                </Box>
                <Stack direction={'row'} justifyContent={'center'}>
                    <Button variant='contained' sx={{px:4, py:2, borderRadius:4}}>
                        More Works
                    </Button>
                </Stack>
            </Stack>
        </Box>
    </>
  )
}

const Ship = (props) => {
  return (
    <>
        <Grid item lg={4} md={6} xs={12} p={2}>
            <Stack direction={'column'} spacing={2} px={{lg:8, md: 4, xs:0}}>
                <img src={props.src} alt={props.alt} width={'12%'}/>
                <Box>
                    <Typography gutterBottom variant='h5' color={'#1C1F35'} 
                    fontWeight={400}>
                        {props.heading}
                    </Typography>
                    <Typography gutterBottom variant='body1' color={'#666C89'} 
                    fontWeight={500} fontSize={'0.8rem'}>
                        {props.para}
                    </Typography>
                </Box>
            </Stack>
        </Grid>
    </>
  )
}

export {Ship}
export default Logicstics