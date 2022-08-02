import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchaseThunk } from '../store/slices/purchase.slice';

const Purchase = () => {
 const dispatch = useDispatch();
 const purchases = useSelector(state => state.purchase )

 useEffect(() => { 
        dispatch(getPurchaseThunk())
 }, [])
 console.log(purchases)
    return (
        <div>
            <h1>Purchase</h1>
            <ul>
                {/* {
                    purchases.map(purchase => (
                        <li>
                            {purchase.name}

                        </li>

                    ))
                } */}
            </ul>
        </div>
    );
};

export default Purchase;