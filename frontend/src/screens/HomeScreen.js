import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../products'

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
