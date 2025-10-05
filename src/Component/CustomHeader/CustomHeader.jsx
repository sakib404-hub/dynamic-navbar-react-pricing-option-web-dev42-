import React, { useEffect, useState } from 'react';

const CustomHeader = () => {
    const [routes, setRoute] = useState([]);

    useEffect(() => {
        fetch('../../../public/navbar.json')
            .then((res) => res.json())
            .then((data) => setRoute(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <nav className='bg-gray-700 flex items-center justify-between px-6 py-4'>
            <div>
                <h2 className='text-xl font-semibold'>Daisy Khala</h2>
            </div>
            <div>
                <ul className='flex justify-center items-center gap-8'>
                    {
                        routes.map((route) => {
                            return <li key={route.id}>{route.name}</li>
                        })
                    }
                </ul>
            </div>
            <div>
                <button className='btn'>Join Now</button>
            </div>
        </nav>
    );
};

export default CustomHeader;