import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    else{
        message = <div>
            <h3>Boroloxx!</h3>
            <p><small>Thanks for spend your money.</small></p>
        </div>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;