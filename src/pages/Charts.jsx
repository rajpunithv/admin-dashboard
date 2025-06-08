import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    BarChart, Bar,
    PieChart, Pie, Cell
} from 'recharts';

const lineData = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 500 },
];

const barData = [
    { name: 'Product A', sales: 2400 },
    { name: 'Product B', sales: 1398 },
    { name: 'Product C', sales: 9800 },
];

const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B'];

const Charts = () => (
    <div className="p-4 space-y-12">
        {/* Line Chart */}
        <div>
            <h2 className="text-xl mb-4 font-semibold">User Growth (Line Chart)</h2>
            <LineChart width={600} height={300} data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#4F46E5" />
            </LineChart>
        </div>

        {/* Bar Chart */}
        <div>
            <h2 className="text-xl mb-4 font-semibold">Sales by Product (Bar Chart)</h2>
            <BarChart width={600} height={300} data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#10B981" />
            </BarChart>
        </div>

        {/* Pie Chart */}
        <div>
            <h2 className="text-xl mb-4 font-semibold">User Groups (Pie Chart)</h2>
            <PieChart width={400} height={300}>
                <Pie
                    data={pieData}
                    cx={200}
                    cy={150}
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    </div>
);

export default Charts;
