import React from 'react';
import './Cart.css'

const Cart = ({ info, handleDelete }) => {
    // console.log(info)

    return (
        <div className='cart-container'>

            <p>{info.strPlayer}</p>
            <button onClick={() => handleDelete(info.idPlayer)} className='delete-btn'>X</button>


        </div>
    );
};

export default Cart;