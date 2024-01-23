import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const LoanTable = ({ data }) => {
  
  const rows = data.map((item, index) => ({
    id: index,
    ...item
  }));

  const columns = [
    { field: 'grade_1', headerName: 'Grade 1', width: 150, valueGetter: params => params.row.grade === '1' ? parseFloat(params.row.currentBalance) : 0 },
    { field: 'grade_2', headerName: 'Grade 2', width: 150, valueGetter: params => params.row.grade === '2' ? parseFloat(params.row.currentBalance) : 0 },
    { field: 'grade_3', headerName: 'Grade 3', width: 150, valueGetter: params => params.row.grade === '3' ? parseFloat(params.row.currentBalance) : 0 },
    { field: 'grade_4', headerName: 'Grade 4', width: 150, valueGetter: params => params.row.grade === '4' ? parseFloat(params.row.currentBalance) : 0 },
  ]

  const totals = {
    grade_1: data.filter(item => item.grade === '1').reduce((sum, item) => sum + parseFloat(item.currentBalance), 0),
    grade_2: data.filter(item => item.grade === '2').reduce((sum, item) => sum + parseFloat(item.currentBalance), 0),
    grade_3: data.filter(item => item.grade === '3').reduce((sum, item) => sum + parseFloat(item.currentBalance), 0),
    grade_4: data.filter(item => item.grade === '4').reduce((sum, item) => sum + parseFloat(item.currentBalance), 0)
  }

  rows.push({ id: 'totals', ...totals })

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pagesize={5} rowsPerPageOptions={[5]} disableRowSelectionOnClick/>
    </div>
  );
}

export { LoanTable };