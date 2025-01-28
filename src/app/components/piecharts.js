"use client"; 

import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  { name: "19", uv: 31.47, fill: "#8884d8" },
  { name: "25", uv: 26.69, fill: "#83a6ed" },
  { name: "30", uv: 15.69, fill: "#8dd1e1" },
  { name: "35", uv: 8.22, fill: "#82ca9d" },
  { name: "40", uv: 8.63, fill: "#a4de6c" },
  { name: "50+", uv: 2.63, fill: "#d0ed57" },
  { name: "Unknown", uv: 8.67, fill: "#ffc658" },
];

const PiChart = () => {
  return (
    <div className="flex">

      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart innerRadius="15%" outerRadius="80%" barSize={40} data={data}> 
 
          <RadialBar minAngle={15} label={{ position: "insideStart", fill: "#fff" }} background clockWise dataKey="uv" />

        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PiChart;
