import axios from "axios";
import { useEffect, useReducer } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

const initialState = {
  loading: true,
  error: "",
  todos: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_DATA":
      return {
        loading: false,
        error: "",
        todos: payload,
      };
    case "SET_ERROR":
      return {
        loading: false,
        error: "There are some errors",
        todos: [],
      };
    default:
      return state;
  }
};

const UseReducerFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(({ data }) => {
        console.info({ data });
        dispatch({ type: "SET_DATA", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);

  const listMarkup = (
    <ListGroup>
      {state.todos.map(({ id, title, completed }) => (
        <ListGroupItem key={id}>
          {title}{" "}
          {completed ? (
            <Badge color="success">Completed</Badge>
          ) : (
            <Badge color="danger">Incompleted</Badge>
          )}
        </ListGroupItem>
      ))}
    </ListGroup>
  );

  return <div>{state.loading ? "Loading" : state.error || listMarkup}</div>;
};

export default UseReducerFetch;
