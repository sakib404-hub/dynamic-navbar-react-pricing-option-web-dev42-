import React from 'react';

const Link = ({ route }) => {
    return (
        <li>
            {route.name}
        </li>
    );
};

export default Link;