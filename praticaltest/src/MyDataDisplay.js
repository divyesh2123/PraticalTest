import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const dateComparator = (date1, date2) => {
  const date1Number = monthToComparableNumber(date1);
  const date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
};


const monthToComparableNumber = (date) => {
  if (date === undefined || date === null || date.length !== 10) {
    return null;
  }
  const yearNumber = Number.parseInt(date.substring(6, 10));
  const monthNumber = Number.parseInt(date.substring(3, 5));
  const dayNumber = Number.parseInt(date.substring(0, 2));
  return yearNumber * 10000 + monthNumber * 100 + dayNumber;
};

  const GridExample = () => {
    const [rowData] = useState([
      { make: 'Toyota', model: 'Celica', price: 35000,name:"divyesh" },
      { make: 'Ford', model: 'Mondeo', price: 32000,name:"rach" },
      { make: 'Porsche', model: 'Boxter', price: 72000, name : "dh" },
    ]);
  
    const [columnDefs] = useState([
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
      { field: 'name' },
    ]);
  
    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    );
};

export default GridExample;