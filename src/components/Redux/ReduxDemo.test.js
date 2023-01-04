import { render, screen, queryByAttribute } from "@testing-library/react";
import { Provider } from "react-redux";
import ReduxDemo from "./ReduxDemo";
import Store from "./Store";
import configureStore from "redux-mock-store";

const getById = queryByAttribute.bind(null, "id");
const mockStore = configureStore([]);

describe("ReduxDemo component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      ...Store,
      count: 0,
    });
  });
  describe("Increment button", () => {
      test("Should render Increment button", () => {
        const component = render(
          <Provider store={store}>
            <ReduxDemo />
          </Provider>
        );

        expect(screen.getByText("0")).toBeTruthy();
        const incrementButton = getById(component.baseElement, "increment");
        expect(incrementButton).toBeTruthy();
      });
  })
  
    describe("Decrement button", () => {
      test("Should render Decrement button", () => {
        const component = render(
          <Provider store={store}>
            <ReduxDemo />
          </Provider>
        );

        const decrementButton = getById(component.baseElement, "decrement");
        expect(decrementButton).toBeTruthy();
      });
    });
  
  describe("Reset button", () => {
    test("Should render Reset button", () => {
      const component = render(
        <Provider store={store}>
          <ReduxDemo />
        </Provider>
      );

      const resetButton = getById(component.baseElement, "reset");
      expect(resetButton).toBeTruthy();
    });
  });

  describe("Multiply button", () => {
    test("Should render Multiply button", () => {
      const component = render(
        <Provider store={store}>
          <ReduxDemo />
        </Provider>
      );

      const multiplyButton = getById(component.baseElement, "multiply");
      expect(multiplyButton).toBeTruthy();
    });
  });

  describe("Log in button", () => {
    test("Should render Log in button", () => {
      const component = render(
        <Provider store={store}>
          <ReduxDemo />
        </Provider>
      );

      const logInButton = getById(component.baseElement, "login");
      expect(logInButton).toBeTruthy();
    });
  });

  describe("Log out button", () => {
    test("Should render Log out button", () => {
      const component = render(
        <Provider store={store}>
          <ReduxDemo />
        </Provider>
      );

      const logOutButton = getById(component.baseElement, "logout");
      expect(logOutButton).toBeTruthy();
    });
  });

});
