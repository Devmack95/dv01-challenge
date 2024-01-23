import React from 'react'
import './App.css'
import { getData } from './request/api'
import { LoanTable } from './LoanTable';

const App = () => {
  const [loanData, setLoanData] = React.useState([]);
  const [homeOwnershipFilter, setHomeOwnershipFilter] = React.useState([]);
  const [quarterFilter, setQuarterFilter] = React.useState([]);
  const [termFilter, setTermFilter] = React.useState([]);
  const [yearFilter, setYearFilter] = React.useState([]);

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

    setHomeOwnershipFilter()
    setQuarterFilter()
    setTermFilter()
    setYearFilter()
  }, []);

  return (
    <div className='App'>
      <p>HELLO WORLD</p>
      <LoanTable
        data={loanData} 
        homeOwnershipFilter={homeOwnershipFilter} 
        quarterFilter={quarterFilter}
        termFilter={termFilter}
        yearFilter={yearFilter}
      />
      <p>CHARTS AND GRAPHS</p>
    </div>
  )
}

export default App
