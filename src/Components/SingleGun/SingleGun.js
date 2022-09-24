import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData, setModalData] = useState({});
    
    const {gun, increaseCount} = props
    const {action, bullet, capacity, category, img, name, price} = gun;
    return (
        <div>
           <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" className='w-[80%] h-44' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-warning">NEW</div>
                    </h2>
                    <p className='text-left'>{action}, {bullet}, {capacity}, {category}</p>
                    <h6 className='text-left font-bold'>Price : {price}</h6>
                    <div className="card-actions justify-end">
                    <button onClick={() => increaseCount()} className="btn btn-sm btn-success">Add To Cart</button>
                    
                    <label onClick={()=> setModalData(gun)} htmlFor="my-modal-3" className="btn btn-sm btn-info">Details</label>
                    </div>
                </div>
            </div>
            {modalData && <Modal modalData={modalData} setModalData={setModalData}/>}
        </div>
    );
};

export default SingleGun;