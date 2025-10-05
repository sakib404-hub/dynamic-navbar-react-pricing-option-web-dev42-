import React, { use } from 'react';
import { LineChart, Line, XAxis, YAxis, BarChart, Bar } from 'recharts';

const MarksChart = ({ marksPromise }) => {

    //Getting the data using use and axios
    const marksPromiseResponse = use(marksPromise);
    const marksData = marksPromiseResponse.data;

    // Processing the data for the furture distribution 
    const marksChart = marksData.map((data) => {
        const student = {
            id: data.id,
            name: data.name,
            physics: data.marks.physics,
            chemistry: data.marks.chemistry,
            math: data.marks.math
        }

        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;

        return student;
    })

    // console.log(marksChart);

    return (
        <div>
            <div className='flex items-center justify-center'>
                <LineChart width={700} height={400} data={marksChart}>
                    <YAxis></YAxis>
                    <XAxis dataKey={'name'}></XAxis>
                    <Line dataKey={'physics'}></Line>
                    <Line dataKey={'chemistry'} stroke='red'></Line>
                    <Line dataKey={'math'} stroke='green'></Line>
                    <Line dataKey={'avg'} stroke='yellow'></Line>
                </LineChart>
            </div>
            <div className='flex items-center justify-center'>
                <BarChart width={1000} height={600} data={marksChart}>
                    <XAxis dataKey={'name'} interval={1}></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey={'avg'} fill='yellow'></Bar>
                    <Bar dataKey={'chemistry'} fill='blue'></Bar>
                    <Bar dataKey={'physics'} fill='red'></Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default MarksChart;