import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCartThunk } from '../store/slices/cart.slice';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductsDetail = () => {
    const products = useSelector(state => state.products);
    const [productsDetail, setProductsDetail] = useState({});
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1)


    const { id } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();


    useEffect(() => {
        const productFind = products.find(newProduct => newProduct.id === Number(id))
        setProductsDetail(productFind)
        console.log(productFind)

        const productFiltered = products.filter(newProduct => newProduct?.category?.id === productFind?.category?.id)
        setSuggestedProducts(productFiltered)


    }, [products, id])



    useEffect(() => {
        dispatch(getProductsThunk())

    }, [])

    const addProduct = () =>{
       
       const cart = {
        id: productsDetail.id,
        quantity: quantity
       }
       dispatch(addCartThunk(cart))
       console.log(cart)
    }

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
            <div>
                <h3>Add</h3>
                <InputGroup className="mb-3">
                    <Form.Control
                        style={{width: '50px', textAlign:'center'}}
                        placeholder="0"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />              
                </InputGroup>
                   <Button onClick={()=> setQuantity(quantity-1)} variant="outline-secondary" id="button-addon2">
                    -
                    </Button>
                    <Button onClick={addProduct} variant="outline-secondary" id="button-addon2">
                    <i className="fa-solid fa-cart-plus"></i>
                    </Button>
                    <Button onClick={()=> setQuantity(quantity+1)} variant="outline-secondary" id="button-addon2">
                    +
                    </Button>
            </div>
            <br />
            <br />
            <ul>
                {

                    suggestedProducts.map(sugeested => (
                        <li key={sugeested.id} onClick={() => navigate(`/products/${sugeested.id}`)}>
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