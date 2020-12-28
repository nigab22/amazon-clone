import React from 'react';
import './Product.css';
import {db} from './Firebase';
import CurrencyFormat from 'react-currency-format';
import Button from '@material-ui/core/Button';



function Product({id, productName, price, rating, image}) {

    const addToCart = () => {
        const cartItem = db.collection('cart-items').doc(id);
        cartItem.get().then((doc)=>{
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity +1
                })
            }else{
                cartItem.set({
                    productName: productName,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })

    }
    

    return (
        <div id="message" className="product">
            <div className="product-description">
                <span className="product-name">{productName}</span>
                <span className="product-price">
                    <CurrencyFormat value={price} displayType={"text"} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} />
                </span>
                <span className="product-rating">       
                    {Array(rating)
                    .fill()
                    .map(()=> (
                        <p>⭐</p>
                    ))}             
                </span>
            </div>
            <img src={image} />
            <Button onClick={addToCart}><span>Add to cart</span></Button>
        </div>
    )
}

export default Product
