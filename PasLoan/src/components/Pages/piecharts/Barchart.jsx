import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Approved", "Declined"],
  ["jan", 50, 28],
  ["feb", 85, 55],
  ["mar", 54, 55],
  
];



const Barchart = () => {
  return (
    <Chart
      chartType="Bar"
      width= "97%"
      height="340px"
      data={data}
      
    />
  );
}

export default Barchart;