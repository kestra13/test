import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormGroup, Checkbox } from '@mui/material';

const SearchPatients = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        if(search) {
            // const patientData = await fetchData();
        }
    }
    return (
        <Stack alignItems="center" mt="27px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{fontSize: { lg: '44px', xs: '30px'}}} mb="50px" textAlign="center">
                Add Patient <br/>
            </Typography>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="on"
            >
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        value={search}
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder="First Name"
                        type="text"
                        />

                    <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        value={search}
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder="Last Name"
                        type="text"
                        />
            </Box>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="on"
            >
                <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </FormControl>
            </Box>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="on"
            >
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        value={search}
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder="Insurance Number"
                        type="text"
                        />
                        <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="UUID"
                        type="text"
                        />
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Date of Birth"
                        type="text"
                        />
            </Box>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="on"
            >
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Height"
                        type="text"
                        />
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Weight"
                        type="text"
                        />
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Temperature"
                        type="text"
                        />        
            </Box>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="on"
            >
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Blood Type"
                        type="text"
                        />
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Blood Pressure"
                        type="text"
                        />
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Oxygen Concentration"
                        type="text"
                        />
            </Box>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="on"
            >
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Allergies"
                        type="text"
                        />
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Current Medications"
                        type="text"
                        />
                <TextField
                        sx={{
                            input: { 
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: 'none'
                            },
                            width: { lg: '200px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height="76px"
                        placeholder="Family History"
                        type="text"
                        />
            </Box>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="on"
            >
                <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Currently Employed?" />
                <FormControlLabel control={<Checkbox />} label="Currently Insured?" />
                </FormGroup>
            </Box>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="on"
            >
                <Button> Submit </Button>
            </Box>
        </Stack>
    )
}

export default SearchPatients