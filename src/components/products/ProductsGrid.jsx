import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCard from "./ProductCard";

const ProductsGrid = ({ data }) => {
  return (
    <>
      <CardGroup>
        <Row
          className="text-center justify-content-center"
          xs="1"
          md="3"
          lg="5"
        >
          {data.map((data, k) => (
            <Col key={k} className="m-2">
              <ProductCard data={data} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </>
  );
};

export default ProductsGrid;
