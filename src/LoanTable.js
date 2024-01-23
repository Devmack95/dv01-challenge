import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import numeral from 'numeral'

const LoanTable = ({
  data, 
  termFilter, 
  homeOwnershipFilter, 
  quarterFilter, 
  yearFilter
}) => {
    
    const totals = {
        grade_1: data
            .filter((item) => item.grade === '1' 
            && item.homeOwnership !== homeOwnershipFilter 
            && item.year !== yearFilter 
            && item.quarter !== quarterFilter 
            && item.term !== termFilter)
            .reduce((sum, item) => sum + parseFloat(item.currentBalance), 0),
        grade_2: data
            .filter((item) => item.grade === '2' 
            && item.homeOwnership !== homeOwnershipFilter 
            && item.year !== yearFilter 
            && item.quarter !== quarterFilter 
            && item.term !== termFilter)
            .reduce((sum, item) => sum + parseFloat(item.currentBalance), 0),
        grade_3: data
            .filter((item) => item.grade === '3' 
            && item.homeOwnership !== homeOwnershipFilter 
            && item.year !== yearFilter 
            && item.quarter !== quarterFilter 
            && item.term !== termFilter)
            .reduce((sum, item) => sum + parseFloat(item.currentBalance), 0),
        grade_4: data
            .filter((item) => item.grade === '4' 
            && item.homeOwnership !== homeOwnershipFilter 
            && item.year !== yearFilter 
            && item.quarter !== quarterFilter 
            && item.term !== termFilter)
            .reduce((sum, item) => sum + parseFloat(item.currentBalance), 0),
    };
   
    const formattedTotals = {
        grade_1: numeral(totals.grade_1).format('$0,0.00'),
        grade_2: numeral(totals.grade_2).format('$0,0.00'),
        grade_3: numeral(totals.grade_3).format('$0,0.00'),
        grade_4: numeral(totals.grade_4).format('$0,0.00'),
    }
   
    const rows = [
        {
            id: 'totals',
            ...formattedTotals
        }
    ]

  const columns = [
    {
      field: 'grade_1',
      headerName: 'Grade 1',
      flex: 1,
    },
    {
      field: 'grade_2',
      headerName: 'Grade 2',
      flex: 1,
    },
    {
      field: 'grade_3',
      headerName: 'Grade 3',
      flex: 1,
    },
    {
      field: 'grade_4',
      headerName: 'Grade 4',
      flex: 1,
    },
  ];
    
    if (data.length === 0) {
        return (
            <div className='App'>
                <p>. . . Loading</p>
          </div>
      )
  }

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagesize={5}
        rowsPerPageOptions={[5]}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export { LoanTable };
