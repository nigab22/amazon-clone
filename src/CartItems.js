import React from 'react'
import CartItem from './CartItem.js'
import './CartItems.css'

function CartItems(props) {
    return (        
        <div className="cart-items">
            <h1>Shoppint Cart</h1>
            <hr />
            <div className="cartItem-items">
                {props.cartItems.map((item) => {
                    return <CartItem 
                        id={item.id}
                        cartItem={item.cartItem} 
                    />
                })}     
            </div>
        </div>
    )

}

export default CartItems
