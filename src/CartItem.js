import React from 'react'
import {db} from './Firebase'
import './CartItem.css'
import CurrencyFormat from 'react-currency-format';


function CartItem({id, cartItem}) {

    const deleteItem = () => {
        db.collection('cart-items').doc(id).delete();
    }

    const changeQuantity = (newQuantity) => {
        db.collection('cart-items').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    let options = [];
    const MAX_QUANTITY = 20;
    for (let i = 1; i < MAX_QUANTITY+1; i++) {
        options.push(<option value={i}>Qty: {i}</option>)
        
    }

    return (
        <div>
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src={cartItem.image} />
                </div>
                <div className="cart-item-info">
                    <div className="cart-item-title">
                        {cartItem.productName}
                    </div>
                    <div className="cart-item-actions">
                        <div className="cart-item-quantity">
                            <select 
                                onChange={(e) => changeQuantity(e.target.value)}
                                value={cartItem.quantity}>
                                {options}
                            </select>
                        </div>
                        <div onClick={deleteItem}
                            className="cart-item-delete">
                            Delete
                        </div>
                    </div>

                </div>
                <div className="cart-item-price">
                    <CurrencyFormat value={cartItem.price} displayType={"text"} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} />
                </div>
            </div>
        </div>
    )
}

export default CartItem
