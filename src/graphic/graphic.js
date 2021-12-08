import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Graph() {
        const { activeIndex, data } = this.state;
        const activeItem = data[activeIndex];
    
        return (
          <div style={{ width: '100%' }}>
            <p>Click each rectangle </p>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart width={500} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Bar dataKey="uv">
                  {data.map((entry, index) => (
                    <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
          </div>
        );
};