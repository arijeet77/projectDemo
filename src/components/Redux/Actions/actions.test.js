import * as actions from "./actions";

describe("Test Actions", () => {
    describe("Update Counter Action", () => {
        test("should create an action for UPDATECOUNTER", () => {
          const payload = 1;
          const expectedAction = {
            type: "UPDATECOUNTER",
            payload,
          };
          expect(actions.updateCounter(payload)).toEqual(expectedAction);
        });
    })

    describe("Increment Action", () => {
        test("should create an action for INCREMENT", () => {
          const expectedAction = {
            type: "INCREMENT",
            payload: 1,
          };
          expect(actions.increment()).toEqual(expectedAction);
        });
    })

    describe("Decrement Action", () => {
        test("should create an action for DECREMENT", () => {
          const expectedAction = {
            type: "DECREMENT",
            payload: 1,
          };
          expect(actions.decrement()).toEqual(expectedAction);
        });
    })

    describe("Reset Action", () => {
      test("should create an action for RESET", () => {
        const expectedAction = {
          type: "RESET",
          payload: 0,
        };
        expect(actions.reset()).toEqual(expectedAction);
      });
    });

    describe("Multiply Action", () => {
      test("should create an action for MULTIPLY", () => {
        const expectedAction = {
          type: "MULTIPLY",
          payload: 10,
        };
        expect(actions.multiply()).toEqual(expectedAction);
      });
    });

    describe("Log In Action", () => {
      test("should create an action for LOGIN", () => {
        const expectedAction = {
          type: "LOGIN",
          payload: true,
        };
        expect(actions.logIn()).toEqual(expectedAction);
      });
    });

    describe("Log Out Action", () => {
      test("should create an action for LOGOUT", () => {
        const expectedAction = {
          type: "LOGOUT",
          payload: false,
        };
        expect(actions.logOut()).toEqual(expectedAction);
      });
    });

});
