import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "Mobile",
    "Monitors",
    "Fridges",
    "Washing Machine",
    "Tablets",
  ];

  return (
    <>
      <ProductCarouselComponent />

      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
