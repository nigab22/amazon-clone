import React from 'react'
import './CartTotal.css'
import CurrencyFormat from 'react-currency-format';

function CartTotal(props) {

    const getCartItemsTotalPrice = () => {
        let count = 0; 
        let totalPrice = 0; 

        props.cartItems.forEach(item => {
            count += parseInt(item.cartItem.quantity);
            totalPrice += parseInt(item.cartItem.quantity) * parseFloat(item.cartItem.price);
        });

        return [count, totalPrice]; 
    }

    return (
        <div className="cart-total">
            <h3>Subtotal (
                {getCartItemsTotalPrice()[0]} items): {' '}  
                <CurrencyFormat value={getCartItemsTotalPrice()[1]} displayType={"text"} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} />
            </h3>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default CartTotal
