import { useContext } from "react";
import { Badge, Button, ButtonGroup } from "reactstrap";
import { CounterContext } from ".";
import ComponentB from "./ComponentB";
import "bootstrap/dist/css/bootstrap.min.css";

const ComponentA = () => {
  const counterContext = useContext(CounterContext);
  console.info({ counterContext });
  const { counter, dispatch } = counterContext;

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          ComponentA Counter <Badge color="secondary">{counter}</Badge>
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
      <ComponentB />
    </div>
  );
};

export default ComponentA;
