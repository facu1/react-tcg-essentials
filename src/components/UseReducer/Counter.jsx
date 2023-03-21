import { useReducer } from "react";
import { Badge, Button, ButtonGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  counter: 0,
};
const reducer = (state, { type, payload = 1 }) => {
  switch (type) {
    case "increment":
      return { ...state, counter: state.counter + payload };
    case "decrement":
      return { ...state, counter: state.counter - payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state1, dispatch1] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Counter1 <Badge color="secondary">{state1.counter}</Badge>
        </Button>
        <Button color="primary" outline>
          Counter2 <Badge color="secondary">{state2.counter}</Badge>
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button
          color="dark"
          onClick={() => dispatch1({ type: "increment", payload: 1 })}
        >
          Increment
        </Button>
        <Button
          color="dark"
          onClick={() => dispatch1({ type: "decrement", payload: 1 })}
        >
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch1({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button
          color="dark"
          onClick={() => dispatch1({ type: "increment", payload: 5 })}
        >
          Increment 5
        </Button>
        <Button
          color="dark"
          onClick={() => dispatch1({ type: "decrement", payload: 5 })}
        >
          Decrement 5
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch2({ type: "increment" })}>
          Increment
        </Button>
        <Button color="dark" onClick={() => dispatch2({ type: "decrement" })}>
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch2({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
