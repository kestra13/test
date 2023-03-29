import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from './medical_icon.png';

export const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx= {{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none'}} px="20px">
      <Link to="/" alt="logo">
        <img src={Logo} alt="Logo" style={{ width: '48px', margin: '0 20px'}}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end">
        <a href="#home" style={{ textDecoration: 'none', color: '#3A1212'}}> Home </a>
        <Link href="#add_patients" to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}> Add Patients </Link>
        <a href="#view_study" style={{ textDecoration: 'none', color: '#3A1212'}}> View Study </a>
      </Stack>
    </Stack>
  )
}

export default Navbar