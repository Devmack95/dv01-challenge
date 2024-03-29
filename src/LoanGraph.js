import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import numeral from 'numeral'

const LoanBarGraph = ({ data, termFilter, homeOwnershipFilter, quarterFilter, yearFilter }) => {
// Function to filter data
  const filterData = () => {
    return data.filter(
      (item) =>
        item.homeOwnership !== homeOwnershipFilter &&
        item.year !== yearFilter &&
        item.quarter !== quarterFilter &&
        item.term !== termFilter
    );
  };

  const filteredData = filterData();

  const possibleGrades = ['1', '2', '3', '4', '5', '6'];

// Grouping data by grade and summing up currentBalance
  const groupedData = filteredData.reduce((acc, item) => {
    const grade = item.grade;
    const currentBalance = parseFloat(item.currentBalance);

    if (possibleGrades.includes(grade)) {
      if (!acc[grade]) {
        acc[grade] = 0;
      }

      acc[grade] += currentBalance;
    }

    return acc;
  }, {});

// Create an array of objects with grade and currentBalance
  const chartData = possibleGrades.map((grade) => ({
    grade,
    currentBalance: groupedData[grade] || 0
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="grade" />
        <YAxis tickFormatter={(value) => numeral(value).format('$0,0.00')}/>
        <Tooltip formatter={(value) => numeral(value).format('$0,0.00')}/>
        <Legend />
        <Bar dataKey="currentBalance" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export { LoanBarGraph };
