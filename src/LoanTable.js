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
    
  const calculateGradeTotal = (grade, data, filters) => {
    return data
      .filter((item) =>
        item.grade === grade &&
        !filters.some(filter => item[filter.key] === filter.value)
      )
      .reduce((sum, item) => sum + parseFloat(item.currentBalance), 0);
  };

  const grades = ['1', '2', '3', '4', '5', '6'];
  
  const totals = grades.reduce((acc, grade) => {
    acc[`grade_${grade}`] = calculateGradeTotal(grade, data, [
      { key: 'homeOwnership', value: homeOwnershipFilter },
      { key: 'year', value: yearFilter },
      { key: 'quarter', value: quarterFilter },
      { key: 'term', value: termFilter },
    ]);
    return acc;
  }, {});
   
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
