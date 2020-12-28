import React, { useState, useEffect } from 'react'
import Product from './Product'
import {db} from './Firebase'
import './Home.css'

function Home() {

    const [products, setProduct] = useState([]);

    useEffect(()=>{
        db.collection("Products").onSnapshot((snapshot) => {
            let tempProducts = [];
            snapshot.docs.map((doc)=>{
                tempProducts.push({
                    id: doc.id,
                    product: doc.data()
                })
            });
            setProduct(tempProducts);
            //console.log(products);
        });
    },[])

    
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-banner" 
                    style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg)"}}>
                </div>

                <div className="home-content">
                    <div className="home-row">
                        {
                            products.slice(3,5).map((item)=>(
                                <Product
                                    id={item.id}
                                    key={item.id}
                                    productName={item.product.productName}
                                    price={item.product.price}
                                    rating={item.product.rating}
                                    image={item.product.image}
                                />
                           ))
                        }
                    </div>
                    <div className="home-row">
                        {
                            products.slice(0,3).map((item)=>(
                                <Product
                                    id={item.id}
                                    key={item.id}
                                    productName={item.product.productName}
                                    price={item.product.price}
                                    rating={item.product.rating}
                                    image={item.product.image}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Home
