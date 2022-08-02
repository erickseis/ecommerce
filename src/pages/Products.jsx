import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductsDetail = () => {
    const products = useSelector(state=> state.products);
    const [productsDetail, setProductsDetail] = useState({});
const [suggestedProducts, setSuggestedProducts] = useState([]);


    const{id} = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();


    useEffect(()=>{
    const productFind = products.find(newProduct => newProduct.id === Number(id))
    setProductsDetail(productFind)
    console.log(productFind)

    const productFiltered = products.filter(newProduct => newProduct?.category?.id === productFind?.category?.id)
setSuggestedProducts(productFiltered)


    },[products, id])



    useEffect(()=>{
        dispatch(getProductsThunk())
       
    }, [])

    return (
        <div className='products-detail'>
            <h1>{productsDetail?.title}</h1>
            <img className='products-detail-img' src={productsDetail?.productImgs?.[0]} alt="" />
           <div className='products-secundary-img'>
            <img src={productsDetail?.productImgs?.[1]} alt="" />
            <img src={productsDetail?.productImgs?.[2]} alt="" />
            </div>
            <p>{productsDetail?.description}</p>
            <h2> Price: <span>{productsDetail?.price} $</span></h2>
            <br />
            <br />
<ul>
{

suggestedProducts.map(sugeested =>(
    <li onClick={() => navigate(`/products/${sugeested.id}`)}>
        {sugeested.title}
        {/* <img src={sugeested.productImgs[0]} alt="" /> */}
         
    </li>
))
}

</ul>

        </div>
    );
};

export default ProductsDetail;