import { NameContext, ColorContext } from ".";

const ComponentC = () => (
  <div>
    <div>Component C</div>
    <NameContext.Consumer>
      {(name) => (
        <ColorContext.Consumer>
          {(color) => (
            <div>
              name: {name}, color: {color}
            </div>
          )}
        </ColorContext.Consumer>
      )}
    </NameContext.Consumer>
  </div>
);

export default ComponentC;
