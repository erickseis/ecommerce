import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchaseThunk } from '../store/slices/purchase.slice';

const Purchase = () => {
 const dispatch = useDispatch();
 const purchases = useSelector(state => state.purchases)

 useEffect(() => { 
        dispatch(getPurchaseThunk())
 }, [])
 console.log(purchases)
    return (
        <div>
            <h1>Purchase</h1>
            <ul >
                  {
                    purchases?.map(purchase => (
                        <ul key={purchase.id}>
                             <h3>{purchase.createdAt}</h3>
                           {purchase.cart.products.map(product => (
                            <>
                           
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <h2>{product.price}</h2>
                            <p>{product.productsInCart.quantity}</p>
                            </>
                            ))}
                            </ul>

                           ))}
                                   
            </ul>
        </div>
    );
};

export default Purchase;