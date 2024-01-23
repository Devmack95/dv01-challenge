import React from 'react';

import { 
    Box,
    Button,
    MenuItem, 
    Select, 
    FormControl,
    InputLabel
} from '@mui/material';

const LoanTableNav = ({
    termFilter, 
    setTermFilter, 
    yearFiler, 
    setYearFilter, 
    quarterFilter, 
    setQuarterFilter, 
    homeOwnershipFilter, 
    setHomeOwnershipFilter,
    resetFilter
}) => {

    const handleTermChange = (e) => {
        setTermFilter(e.target.value)
    };

    const handleHomeOwnershipChange = (e) => {
        setHomeOwnershipFilter(e.target.value)
    };

    const handleQuarterChange = (e) => {
        setQuarterFilter(e.target.value)
    }

    const handleYearChange = (e) => {
        setYearFilter(e.target.value)
    }

    return (
        <Box display='flex' gap={3} justifyContent='center'>
            <FormControl sx={{ minWidth: '200px'}}>
                <InputLabel id='home-ownership-label'>Home Ownership</InputLabel>
                <Select
                    labelId='home-ownership-label'
                    id='home-ownership-select'
                    value={homeOwnershipFilter === undefined ? '' : homeOwnershipFilter}
                    label='Home Ownership'
                    onChange={handleHomeOwnershipChange}
                >
                    <MenuItem value={'MORTGAGE'}>Mortgage</MenuItem>
                    <MenuItem value={'RENT'}>Rent</MenuItem>
                    <MenuItem value={'OWN'}>Own</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: '200px'}}>
                <InputLabel id='quarter-label'>Quarter</InputLabel>
                <Select
                    labelId='quarter-label'
                    id='quarter-select'
                    value={quarterFilter === undefined ? '' : quarterFilter}
                    label='Quarter'
                    onChange={handleQuarterChange}
                >
                    <MenuItem value={'1'}>1</MenuItem>
                    <MenuItem value={'2'}>2</MenuItem>
                    <MenuItem value={'3'}>3</MenuItem>
                    <MenuItem value={'4'}>4</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: '200px'}}>
                <InputLabel id='term-label'>Term</InputLabel>
                <Select
                    labelId='term-label'
                    id='term-select'
                    value={termFilter === undefined ? '' : termFilter}
                    label='Term'
                    onChange={handleTermChange}
                >
                    <MenuItem value={' 36 months'}>36 Months</MenuItem>
                    <MenuItem value={' 60 months'}>60 Months</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: '200px'}}>
                <InputLabel id='year-label'>Year</InputLabel>
                <Select
                    labelId='year-label'
                    id='year-select'
                    value={yearFiler === undefined ? '' : yearFiler}
                    label='Year'
                    onChange={handleYearChange}
                >
                    <MenuItem value={'2010'}>2010</MenuItem>
                    <MenuItem value={'2011'}>2011</MenuItem>
                    <MenuItem value={'2012'}>2012</MenuItem>
                    <MenuItem value={'2013'}>2013</MenuItem>
                    <MenuItem value={'2014'}>2014</MenuItem>
                    <MenuItem value={'2015'}>2015</MenuItem>
                    <MenuItem value={'2016'}>2016</MenuItem>
                </Select>
            </FormControl>
            <Button variant='outlined' onClick={resetFilter}>Reset</Button>
        </Box>
    )
}

export { LoanTableNav };