import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = () => {

  const cursorPointer = {
    cursor: "pointer"
  }

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          style={{ height: "300px", objectFit: "cover" }}
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Best Seller Laptop</h3>
          </LinkContainer>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          style={{ height: "300px", objectFit: "cover" }}
          alt="Second slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Best Seller Book</h3>
          </LinkContainer>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          style={{ height: "300px", objectFit: "cover" }}
          alt="Third slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3 >Best Seller Camera</h3>
          </LinkContainer>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
