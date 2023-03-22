import { Container } from "reactstrap";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/about");
  // }, 2000);

  return (
    <Container>
      <h4>Contact</h4>
      <p>{`${faker.lorem.paragraph()}`}</p>
    </Container>
  );
};

export default Contact;
