import React from 'react';
import ReactDom from 'react-dom';
import './Product.css';
import {db} from './Firebase';
import CurrencyFormat from 'react-currency-format';
import Button from '@material-ui/core/Button';



function Product(props) {

    const addToCart = () => {
        const cartItem = db.collection('cart-items').doc(props.id);
        cartItem.get().then((doc)=>{
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity +1
                })
            }else{
                cartItem.set({
                    productName: props.productName,
                    image: props.image,
                    price: props.price,
                    quantity: 1
                })
            }
        })

    }
    

    return (
        <div id="message" className="product">
            <div className="product-description">
                <span className="product-name">{props.productName}</span>
                <span className="product-price">
                    <CurrencyFormat value={props.price} displayType={"text"} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} />
                </span>
                <span className="product-rating">                    
                    <p>⭐</p><p>⭐</p><p>⭐</p><p>⭐</p><p>⭐</p>
                </span>
            </div>
            <img src={props.image} />
            <Button onClick={addToCart}><span>Add to cart</span></Button>
        </div>
    )
}

export default Product
