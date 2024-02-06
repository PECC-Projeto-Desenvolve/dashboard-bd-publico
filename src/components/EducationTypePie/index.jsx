/* import { PieChart } from '@mui/x-charts';

const EducationTypePie = ({nomeLabel1, qtdLabel1, nomeLabel2, qtdLabel2}) => {
    return (
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: qtdLabel1, label: nomeLabel1 },
                { id: 1, value: qtdLabel2, label: nomeLabel2 },
              ],
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          width={400}
          height={200}
        />
    );
  }

export default EducationTypePie;   */

import { Typography } from "@mui/material";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const PieRechartComponent = ({ nomeLabel1, qtdLabel1, nomeLabel2, qtdLabel2, qtdTotal }) => {
  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const pieData = [
    {
      name: nomeLabel1,
      value: qtdLabel1
    },
    {
      name: nomeLabel2,
      value: qtdLabel2
    }
  ];
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const percent = payload[0].value / qtdTotal * 100;
      console.log({percent});
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc"
          }}
        >
          <Typography>{`${payload[0].name} : %${percent.toFixed(2)}`}</Typography>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={730} height={300}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {pieData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend wrapperStyle={{fontFamily: 'Rajdhani', fontSize: '1.5rem', fontWeight: 'bold', color: '#FF0000'}}/>
    </PieChart>
  );
};

export default PieRechartComponent;

