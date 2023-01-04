import { connect } from "react-redux";
import {
  increment,
  decrement,
  reset,
  multiply,
  logIn,
  logOut,
  updateCounter
} from "./Actions/actions";

const ReduxDemo = ({
  countVariable,
  incrementAction,
  decrementAction,
  resetAction,
  multiplyAction,
  logInAction,
  logOutAction,
  authentication,
  updateCounterAction
}) => {

  const onCLickIncrementHandler = ()=>{
    updateCounterAction(countVariable + 1)
  }
  const onCLickDecrementHandler = () => {
    updateCounterAction(countVariable - 1);
  };
  return (
    <div>
      <center>
        <h2>Counter Example</h2>
        <h3>{countVariable}</h3>
        <br />
        <button id="increment" onClick={onCLickIncrementHandler}>
          Increment
        </button>{" "}
        <button id="reset" onClick={resetAction}>
          Reset
        </button>{" "}
        <button id="decrement" onClick={onCLickDecrementHandler}>
          Decrement
        </button>{" "}
        <button id="multiply" onClick={multiplyAction}>
          Multiply by 10
        </button>{" "}
        <br />
        <h2>Another Redux Example</h2>
        <p>Login to see a message</p>
        {authentication ? (
          <div>
            <p>This is another example of Redux.</p>
          </div>
        ) : (
          ""
        )}
        <button id="login" onClick={logInAction}>
          Log In
        </button>{" "}
        <button id="logout" onClick={logOutAction}>
          Log Out
        </button>{" "}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countVariable: state.count,
  authentication: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    incrementAction: () => dispatch(increment()),
    decrementAction: () => dispatch(decrement()),
    resetAction: () => dispatch(reset()),
    multiplyAction: () => dispatch(multiply()),
    logInAction: () => dispatch(logIn()),
    logOutAction: () => dispatch(logOut()),
    updateCounterAction: (param) => dispatch(updateCounter(param))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);
