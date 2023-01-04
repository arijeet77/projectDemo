const reducer = (state = { count: 0, auth: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + payload,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - payload,
      };
    case "UPDATECOUNTER":
      return {
        ...state,
        count: payload,
      };
    case "RESET":
      return {
        ...state,
        count: payload,
      };
    case "MULTIPLY":
      return {
        ...state,
        count: state.count * payload,
      };
    case "LOGIN":
      return {
        ...state,
        auth: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        auth: payload,
      };
    default:
      return state;
  }
};

export default reducer;
