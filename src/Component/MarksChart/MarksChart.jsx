import React, { use } from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

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
        return student;
    })

    console.log(marksChart);

    return (
        <div className='flex items-center justify-center'>
            <LineChart width={700} height={400} data={marksChart}>
                <YAxis></YAxis>
                <XAxis dataKey={'name'}></XAxis>
                <Line dataKey={'physics'}></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <Line dataKey={'math'} stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default MarksChart;