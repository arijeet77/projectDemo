import { PropTypes } from "prop-types";

const ReduxSagaDemo = ({ value, onIncrement, onDecrement, onIncrementAsync }) => {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};

ReduxSagaDemo.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default ReduxSagaDemo;
