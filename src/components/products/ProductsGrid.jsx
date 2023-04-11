import React from "react";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCard from "./ProductCard";

const ProductsGrid = ({ data }) => {
  return (
    <Container>
      <CardGroup>
        <Row xs={2} md={4} lg={5}>
          {data.map((data, k) => (
            <Col key={k}>
              <ProductCard data={data} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default ProductsGrid;
