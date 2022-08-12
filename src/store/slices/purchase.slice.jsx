import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: [],
    reducers: {
        setPurchase: (state, action)=>{
            const purchases = action.payload;
            return purchases
        }
    }
})

export const getPurchaseThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
        .then(res => dispatch(setPurchase(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const {setPurchase} = purchaseSlice.actions;

export default purchaseSlice.reducer;
