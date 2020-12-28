import React from 'react';
import CartItem from './CartItem.js';
import './CartItems.css';

function CartItems({id, cartItems}) {
    return (        
        <div className="cart-items">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="cartItem-items">
                {cartItems?.length === 0 ?(
                    <div>
                        <h3>Your shopping cart is empty.</h3>
                        <p>You have no items in your cart. To buy one or more items, 
                            click "Add to cart" next to the item.</p>
                    </div>
                ):
                (
                cartItems.map((item) => {
                    return <CartItem 
                        id={item.id}
                        cartItem={item.cartItem} 
                    />
                }))}
            </div>
        </div>
    )

}

export default CartItems
