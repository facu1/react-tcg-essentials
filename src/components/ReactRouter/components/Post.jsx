import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";

const Post = () => {
  const params = useParams();
  const { post_id: id } = params;
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(res.data);
    })();
  }, []);

  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>{id}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{post.title}</CardTitle>
          <CardText>{post.body}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
