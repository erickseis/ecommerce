import React, { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { buyCart, getCartThunk } from "../store/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";


const CartSidebar = ({ show, handleClose }) => {
   
   const dispatch = useDispatch();
   const cart = useSelector(state => state.cart);
   const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getCartThunk())
    },[])

const getTotal = (car) => {
  return car.productsInCart.quantity * car.price
  }
const totalPrices = () =>{
  let total= 0;
  cart.forEach(car => {
    total += Number(car.price)
  })
  return total
}  




  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{display: 'flex', gap: '6rem', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}} ><i className="fa-solid fa-cart-plus"></i> CART SHOP</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <Button onClick={()=> dispatch(buyCart())}>Buy Cart</Button>
        
        <ul>
            {cart.map(car=>(
                <>
                <li onClick={() => navigate(`/products/${car.id}`)} style={{listStyle: 'none'}}>
                    <h3> <span style={{opacity: '20%', fontSize: '15px'}} > {car.brand}</span></h3>
            {car.title}
                </li>
                <q>Quantity {car.productsInCart.quantity}</q>
                <p>{getTotal(car)}</p>
                </>
            ))}
        </ul>
            <h2>{totalPrices() }</h2>
        
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;