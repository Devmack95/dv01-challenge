import React from 'react'
import './App.css'
import { getData } from './request/api'
import { LoanTable } from './LoanTable';
import { LoanTableNav } from './LoanTableNav';
import { Box } from '@mui/material';

const App = () => {
  const [loanData, setLoanData] = React.useState([]);
  const [homeOwnershipFilter, setHomeOwnershipFilter] = React.useState('');
  const [quarterFilter, setQuarterFilter] = React.useState('');
  const [termFilter, setTermFilter] = React.useState('');
  const [yearFilter, setYearFilter] = React.useState('');

  const resetFilter = React.useCallback(() => {
    setHomeOwnershipFilter('')
    setQuarterFilter('')
    setTermFilter('')
    setYearFilter('')
  }, [])

  React.useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const result = await getData();
        setLoanData(result);
      } catch (error) {
        console.error(error)
      }

    }
    fetchLoanData();
  }, []);

  return (
    <Box className='App' gap={4} display='flex' flexDirection='column'>
      <p>HELLO WORLD</p>
      <LoanTableNav
        setTermFilter={setTermFilter}
        setYearFilter={setYearFilter}
        setQuarterFilter={setQuarterFilter}
        setHomeOwnershipFilter={setHomeOwnershipFilter}
        resetFilter={resetFilter}
      />
      <LoanTable
        data={loanData} 
        homeOwnershipFilter={homeOwnershipFilter} 
        quarterFilter={quarterFilter}
        termFilter={termFilter}
        yearFilter={yearFilter}
      />
      <p>CHARTS AND GRAPHS</p>
    </Box>
  )
}

export default App
