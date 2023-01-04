const state = { data: [] };

const APIReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DATA":
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default APIReducer;
