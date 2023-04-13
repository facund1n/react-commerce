import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const ProductCard = ({ data }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        boxShadow: "0.5px 0px 3px gray",
        borderRadius: "8px",
        padding: "10px",
        margin: "0",
        textOverflow: "ellipsis",
      }}
    >
      <img className="img-fluid" src={data.image} style={{ height: "180px" }} />

      <Container fluid>
        <div className="my-3" style={{ minHeight: "160px" }}>
          <h6>{data.title}</h6>
        </div>
        <hr />
        <div>
          <h4>${data.price}</h4>
          <Button variant="dark" className="btn btn-dark btn-block w-100 my-2">
            ADD TO{" "}
            <FontAwesomeIcon icon={faCartPlus} style={{ color: "#18c944" }} />
          </Button>
          {/* hacer componente que incluya función */}
          <Button
            variant="outline-dark"
            className="btn btn-outline-dark w-100 my-2"
          >
            DETAILS
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ProductCard;
