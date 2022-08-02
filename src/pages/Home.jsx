import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { filterCategoryThunk, filterTitle, getProductsThunk } from '../store/slices/products.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';


//con useselector puedo mostrar mis productos traidos de la api
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([])

  const products = useSelector(state => state.products);


  useEffect(() => {
    dispatch(getProductsThunk())

    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
      .then(res => setCategories(res.data.data.categories))
  }, [])

  console.log(categories)

  return (

    <div>
      <Row>
        <Col lg={3}>
          <ListGroup>
            {
              categories.map(categorie => (

                <ListGroup.Item key={categorie.id} 
                onClick={() => dispatch(filterCategoryThunk(categorie.id))}>
                  {categorie.name}
                  </ListGroup.Item>
              ))
            }
          </ListGroup>



        </Col>
        <Col>

          <h1>home</h1>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <Button variant="outline-secondary" onClick={() => dispatch(filterTitle(searchValue))}>
              Button
            </Button>
          </InputGroup>

          <Row xs={1} md={2} xl={3} className="g-4">
            {
              products.map(product => (
                <Col key={product.id}>
                  <Card onClick={() => navigate(`/products/${product.id}`)}>
                    <Card.Img variant="top" src={product.productImgs} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

              ))

            }
          </Row>
        </Col>
      </Row>



    </div>
  );
};

export default Home;