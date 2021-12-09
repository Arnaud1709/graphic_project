import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';
import { next, previous, selectCount } from './graphicSlice';

export function Graph() {
  const graph = useSelector(selectCount)
  const dispatch = useDispatch();

    
        return (
          <div style={{ width: '100%' }}>
            <ResponsiveContainer width="100%" height={100}>
            <button onClick={() => dispatch(previous())}> -1 </button>
              <BarChart width={500} height={400} data={graph}>
              <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Bar dataKey="uv" fill="#8884d8">
                </Bar>
              </BarChart>
              <button onClick={() => dispatch(next())}> +1 </button>
            </ResponsiveContainer>
          </div>
        );
};