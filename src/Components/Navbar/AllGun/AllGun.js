import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGun from '../../SingleGun/SingleGun';

const AllGun = ({increaseCount}) => {

    const [guns, setGuns] = useState([]);
    
    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    }, []);
    return (
        <div>
           <div className="text-center py-7">
           <h2 className='text-2xl font-bold mb-3'>Welcome To Fake Gun Store</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores illum itaque aliquam eius dolorem nisi laudantium quam asperiores consequatur officiis.</p>
           </div>
           <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    guns.map(gun => <SingleGun gun={gun} increaseCount={increaseCount} key={gun.id}></SingleGun>)
                }
            </div>
        </div>
    );
};

export default AllGun;