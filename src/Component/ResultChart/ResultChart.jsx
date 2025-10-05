import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const resultData = [
    {
        "id": 1,
        "name": "Ariana Khan",
        "physics": 85,
        "chemistry": 78,
        "math": 92
    },
    {
        "id": 2,
        "name": "Rafiul Islam",
        "physics": 74,
        "chemistry": 81,
        "math": 69
    },
    {
        "id": 3,
        "name": "Nusrat Jahan",
        "physics": 91,
        "chemistry": 89,
        "math": 95
    },
    {
        "id": 4,
        "name": "Tanvir Ahmed",
        "physics": 67,
        "chemistry": 72,
        "math": 80
    },
    {
        "id": 5,
        "name": "Mehazabin Akter",
        "physics": 88,
        "chemistry": 85,
        "math": 90
    },
    {
        "id": 6,
        "name": "Fahim Rahman",
        "physics": 70,
        "chemistry": 68,
        "math": 74
    },
    {
        "id": 7,
        "name": "Sadia Noor",
        "physics": 93,
        "chemistry": 95,
        "math": 97
    },
    {
        "id": 8,
        "name": "Rashed Karim",
        "physics": 60,
        "chemistry": 64,
        "math": 58
    },
    {
        "id": 9,
        "name": "Tania Akhter",
        "physics": 77,
        "chemistry": 82,
        "math": 79
    },
    {
        "id": 10,
        "name": "Ibrahim Hossain",
        "physics": 84,
        "chemistry": 76,
        "math": 88
    }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={700} height={400} data={resultData} >
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'}></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;