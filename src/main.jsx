import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/customStyle.css";

import Container from "react-bootstrap/Container";

import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import ProductsFetch from "./components/products/ProductsFetch";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Container>
      <Welcome />
      <ProductsFetch />
    </Container>
  </React.StrictMode>
);
