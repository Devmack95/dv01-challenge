# dv01 code challenge

Welcome to my code challenge!

I took the liberty to complete the bonus points as well.

While working i also updated react and react-dom from 16.8.0 to 17.0.2 so that I would be able to use mui/material and mui/x-data-grid. In the process I also had to update recharts to 2.10.4 because of the peer dependancies with mui.

I used Mui/Material prebuild components for my select dropdowns as well as my reset button.

Mui/x-data-grid was used to create my table.

## Installation Instructions

- clone repo to your local machine
- run npm install from your terminal to install all dependancies
- run npm run start from your terminal to load application. Your default browser will open a new tab running http://localhost:3000/

## Table/Graph Instructions

- Select dropdowns controls data displayed in both the graph and chart.
- Selecting a item from the dropdown filters out the data that is not included in the search.
- Pressing reset button will clear the seach params selected from dropdowns.
- Hovering over indivdual bar graph items will show a tooltip stating the exact balance.
