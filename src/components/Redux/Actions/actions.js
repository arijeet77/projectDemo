export const increment = () => (
  {
    type: "INCREMENT",
    payload: 1
  }
);

export const decrement = () => (
  {
    type: "DECREMENT",
    payload: 1
  }
);

export const updateCounter = (payload) => (
  {
    type: "UPDATECOUNTER",
    payload: payload,
  }
);

export const reset = () => (
  {
    type: "RESET",
    payload: 0
  }
);

export const multiply = () => (
  {
    type: "MULTIPLY",
    payload: 10,
  }
);

export const logIn = () => (
  {
    type: "LOGIN",
    payload: true,
  }
);

export const logOut = () => (
  {
    type: "LOGOUT",
    payload: false,
  }
);
