import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState } from "react";

function Products(props) {
  //creating the  product objects
  const products = [
    {
      id: 1,
      name: "sports car",
      description:
        "Its about sports car. It is latest model and very trendy. It's available in all the colours.",
      imageUrl: "../assets/redCar.jpeg",
      price: 10.0,
      styleVariants: [
        { colour: "red" },
        { colour: "grey" },
        { colour: "black" },
      ],
    },
    {
      id: 2,
      name: "phone",
      description: "New Samsung galaxy with foldable screen",
      imageUrl: "../assets/product2.jpg",
      price: 12.0,
      styleVariants: [
        { colour: "red" },
        { colour: "blue" },
        { colour: "black" },
      ],
    },
    {
      id: 3,
      name: "phone",
      description: "New Mac apple chip laptop",
      imageUrl: "../assets/product3.jpg",
      price: 13.0,
      styleVariants: [
        { colour: "red" },
        { colour: "pink" },
        { colour: "black" },
      ],
    },
    {
      id: 4,
      name: "laptop",
      description: "New Mac apple chip laptop",
      imageUrl: "../assets/product4.jpg",
      price: 12.0,
      styleVariants: [
        { colour: "red" },
        { colour: "blue" },
        { colour: "black" },
      ],
    },
    {
      id: 5,
      name: "cycle",
      description: "New Mac apple chip laptop",
      imageUrl: "../assets/product5.jpg",
      price: 12.0,
      styleVariants: [
        { colour: "red" },
        { colour: "blue" },
        { colour: "black" },
      ],
    },
    {
      id: 6,
      name: "sports car",
      description:
        "Its about sports car. It is latest model and very trendy. It's available in all the colours.",
      imageUrl: "../assets/product6.jpg",
      price: 10.0,
      styleVariants: [
        { colour: "red" },
        { colour: "grey" },
        { colour: "black" },
      ],
    },
    {
      id: 7,
      name: "sports car",
      description:
        "Its about sports car. It is latest model and very trendy. It's available in all the colours.",
      imageUrl: "../assets/product7.jpg",
      price: 10.0,
      styleVariants: [
        { colour: "red" },
        { colour: "grey" },
        { colour: "black" },
      ],
    },
    {
      id: 8,
      name: "sports car",
      description:
        "Its about sports car. It is latest model and very trendy. It's available in all the colours.",
      imageUrl: "../assets/product8.jpg",
      price: 10.0,
      styleVariants: [
        { colour: "red" },
        { colour: "grey" },
        { colour: "black" },
      ],
    },
    {
      id: 9,
      name: "sports car",
      description:
        "Its about sports car. It is latest model and very trendy. It's available in all the colours.",
      imageUrl: "../assets/product9.jpg",
      price: 10.0,
      styleVariants: [
        { colour: "red" },
        { colour: "grey" },
        { colour: "black" },
      ],
    },
    {
      id: 10,
      name: "phone",
      description:
        "Its about sports car. It is latest model and very trendy. It's available in all the colours.",
      imageUrl: "../assets/product10.jpg",
      price: 10.0,
      styleVariants: [
        { colour: "red" },
        { colour: "grey" },
        { colour: "black" },
      ],
    },
  ];
  const [buttonTitle, setButtonTitle] = useState({ id: 0, colour: "" });

  const handleStyleSelection = (colour, cardId) => {
    setButtonTitle({ id: cardId, colour: colour });
  };
  //it performs adding products totalprice
  const handleClick = (e) => {
    props.setTotalPrice(props.totalPrice + parseFloat(e.target.value));
    props.setVisibility("visible");
  };
  return (
    <div>
      <h2>Welcome to Products page!</h2>

      <div>
        <Container className="produtcsContainer">
          <div className="">
            <Row className="mt-4">
              {products.map((eachProduct, index) => (
                <Card style={{ width: "20%" }}>
                  <Card.Img variant="top" src={eachProduct.imageUrl} />
                  <Card.Body>
                    <Card.Title>{eachProduct.name}</Card.Title>
                    <Card.Text>{eachProduct.description}</Card.Text>
                    <Card.Text>{eachProduct.price}</Card.Text>
                    {/* creating dropdown button */}
                    <DropdownButton
                      id="dropdown-basic-button"
                      key={index}
                      title={
                        eachProduct.id === buttonTitle.id
                          ? buttonTitle.colour
                          : "Select Your colour"
                      }
                      onSelect={(eventKey) =>
                        handleStyleSelection(eventKey, eachProduct.id)
                      }
                    >
                      {eachProduct.styleVariants.map((styleVariant, index) => (
                        <Dropdown.Item eventKey={styleVariant.colour}>
                          {styleVariant.colour}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                    {/* when u click the buy button it calls handleClick function  */}
                    <Button
                      variant="primary"
                      onClick={handleClick}
                      value={eachProduct.price}
                    >
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Products;
