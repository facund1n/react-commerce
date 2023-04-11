import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ data }) => {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={data.image} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text style={{ textOverflow: "ellipsis" }}>
          {data.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
