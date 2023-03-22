import { Card, CardBody, CardText, CardTitle, Container } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data.slice(0, 5));
    })();
  }, []);

  const listMarkup =
    posts.length > 0 ? (
      posts.map(({ id, title, body }) => (
        <Card
          key={id}
          style={{
            width: "18rem",
          }}
        >
          <CardBody>
            <Link to={`/posts/${id}`}>
              <CardTitle tag="h5">{title}</CardTitle>
            </Link>
            <CardText>{body}</CardText>
          </CardBody>
        </Card>
      ))
    ) : (
      <div>No posts found</div>
    );

  return (
    <Container>
      <h4>Home</h4>
      {listMarkup}
    </Container>
  );
};

export default Home;
