import { useContext } from "react";
import { Badge, Button, ButtonGroup } from "reactstrap";
import { CounterContext } from ".";
import ComponentC from "./ComponentC";
import "bootstrap/dist/css/bootstrap.min.css";

const ComponentB = () => {
  const counterContext = useContext(CounterContext);
  console.info({ counterContext });
  const { counter, dispatch } = counterContext;

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          ComponentB Counter <Badge color="secondary">{counter}</Badge>
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button
          color="dark"
          onClick={() => dispatch({ type: "increment", payload: 1 })}
        >
          Increment
        </Button>
        <Button
          color="dark"
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
        >
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </ButtonGroup>
      <br />
      <ComponentC />
    </div>
  );
};

export default ComponentB;
