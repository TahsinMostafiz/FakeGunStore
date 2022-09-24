import React from 'react';

const Modal = (props) => {
    
    const {action, bullet, capacity, category, img, name, price} =props.modalData
    return (
        <div>
            
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={()=> props.setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-4">{action}, {bullet}, {capacity}, {category}</p>
                    <h4 className='text-1xl font-bold'>Price : {price}</h4>
                    <img src={img} alt="Shoes" className='w-[80%] h-44' />
                </div>
            </div>

        </div>
    );
};

export default Modal;