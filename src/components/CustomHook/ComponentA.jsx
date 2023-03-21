import { Badge, Button, ButtonGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useCounter from "./customHook/useCounter";

const ComponentA = () => {
  const [count, increment, decrement, reset] = useCounter(10);

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          ComponentA Counter <Badge color="secondary">{count}</Badge>
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button color="dark" onClick={increment}>
          Increment
        </Button>
        <Button color="dark" onClick={decrement}>
          Decrement
        </Button>
        <Button color="danger" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ComponentA;
