import React from 'react'
import { Box } from '@mui/material'
import Section1 from '../Components/Section1'
import Section3 from '../Components/Section3'
import Section5 from '../Components/Section5'
import Section6 from '../Components/Section6'
import Section7 from '../Components/Section7'
import Section8 from '../Components/Section8'
import Section9 from '../Components/Section9'
import Logicstics from '../Components/Logicstics'
import Pracel from '../Components/Pracel'
import Header2 from '../Components/Header2'

const Page3 = () => {
  return (
    <>
       <Box>
        <Header2 />
        <Section1 />
        <Pracel />
        <Logicstics />
        <Section3 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </Box>
    </>
  )
}

export default Page3