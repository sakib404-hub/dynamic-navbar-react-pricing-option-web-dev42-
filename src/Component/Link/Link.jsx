import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='hover:bg-amber-600 mb-2 px-4'>
            {route.name}
        </li>
    );
};

export default Link;