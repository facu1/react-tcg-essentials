import { Container } from "reactstrap";
import { faker } from "@faker-js/faker";
import Colorful from "../hoc/Colorful";

const About = () => {
  return (
    <Container>
      <h4>About</h4>
      <p>{`${faker.lorem.paragraph()}`}</p>
    </Container>
  );
};

export default Colorful(About);
