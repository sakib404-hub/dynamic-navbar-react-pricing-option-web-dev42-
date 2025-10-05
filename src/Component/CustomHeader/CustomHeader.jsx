import React, { useEffect, useState } from 'react';
import Link from '../Link/Link';
import { Ban, Menu } from 'lucide-react';
import { CiMenuFries } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";

const CustomHeader = () => {

    const [routes, setRoute] = useState([]);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        fetch('../../../public/navbar.json')
            .then((res) => res.json())
            .then((data) => setRoute(data))
            .catch((err) => console.log(err))
    }, [])

    const handleMenuButtonClick = () => {
        setOpen(!open)
    }

    const links = routes.map((route) => {
        return <Link key={route.id} route={route}></Link>
    });


    return (
        <nav className='bg-gray-700 flex items-center justify-between px-6 py-4'>
            <div className='flex gap-2 items-center justify-center'>
                <span onClick={() => { handleMenuButtonClick() }} className='lg:hidden block'>
                    {
                        open ? <Menu /> : <Ban />
                    }
                </span>
                <ul className={`lg:hidden block absolute bg-amber-700 px-6 p-4 rounded-sm
                    duration-1000
                    ${open ? '-top-50' : 'top-15'}`}>
                    {
                        links
                    }
                </ul>
                {/* <CiMenuFries className='font-white text-2xl font-bold' /> */}
                {/* <ImCancelCircle /> */}
                <h2 className='text-xl font-semibold'>Daisy Khala</h2>
            </div>
            <div>
                <ul className='hidden lg:flex gap-10'>
                    {
                        links
                    }
                </ul>
            </div>
            {/* <div>
                <ul className='flex justify-center items-center gap-8'>
                    {
                        routes.map((route) => {
                            return <li key={route.id}>{route.name}</li>
                        })
                    }
                </ul>
            </div> */}
            <div>
                <button className='btn'>Join Now</button>
            </div>
        </nav >
    );
};

export default CustomHeader;