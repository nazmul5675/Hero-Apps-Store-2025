import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartss = ({ ratings }) => {
    console.log(ratings);
    return (
        <div className='w-full h-96 bg-slate-200 p-10'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={700} height={300} data={ratings} layout="vertical">
                    <CartesianGrid />
                    <XAxis type='number' ></XAxis>
                    <YAxis dataKey='name' type='category' ></YAxis>
                    <Bar dataKey="count" fill="#FFC107" />
                    <Tooltip></Tooltip>
                    <Legend></Legend>


                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default BarChartss;