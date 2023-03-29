import React, { useState } from 'react';
import { Box } from '@mui/material';

import AddPatient from '../components/AddPatient';
import Patients from '../components/Patients';

export const Home = () => {
  return (
    <Box>
      <AddPatient/>
      <Patients/>
    </Box>
  )
}

export default Home