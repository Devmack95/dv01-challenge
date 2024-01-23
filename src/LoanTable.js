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
        grade_5: data
            .filter((item) => item.grade === '5' 
            && item.homeOwnership !== homeOwnershipFilter 
            && item.year !== yearFilter 
            && item.quarter !== quarterFilter 
            && item.term !== termFilter)
        .reduce((sum, item) => sum + parseFloat(item.currentBalance), 0),
        grade_6: data
            .filter((item) => item.grade === '6' 
            && item.homeOwnership !== homeOwnershipFilter 
            && item.year !== yearFilter 
            && item.quarter !== quarterFilter 
            && item.term !== termFilter)
            .reduce((sum, item) => sum + parseFloat(item.currentBalance), 0)
    };
   
    const formattedTotals = {
      grade_1: numeral(totals.grade_1).format('$0,0.00'),
      grade_2: numeral(totals.grade_2).format('$0,0.00'),
      grade_3: numeral(totals.grade_3).format('$0,0.00'),
      grade_4: numeral(totals.grade_4).format('$0,0.00'),
      grade_5: numeral(totals.grade_5).format('$0,0.00'),
      grade_6: numeral(totals.grade_6).format('$0,0.00'), 
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
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'grade_2',
      headerName: 'Grade 2',
      flex: 1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'grade_3',
      headerName: 'Grade 3',
      flex: 1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'grade_4',
      headerName: 'Grade 4',
      flex: 1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'grade_5',
      headerName: 'Grade 5',
      flex: 1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'grade_6',
      headerName: 'Grade 6',
      flex: 1,
      align: 'center',
      headerAlign: 'center'
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
    <div style={{ height: 110, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        hideFooter
        hideFooterPagination
        sx={{
          '.MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
            borderRight: '1px solid rgba(224, 224, 224, 1)'
          }
        }}
      />
    </div>
  );
};

export { LoanTable };
