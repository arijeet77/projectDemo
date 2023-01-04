import reducer from "./reducer";

describe("Test Reducer", () => {
  describe("Increment switch case", () => {
    test("has a increment switch case", () => {
      const expectedState = {
        count: 1,
        auth: false,
      };
      expect(reducer(undefined, { type: "INCREMENT", payload: 1 })).toEqual(
        expectedState
      );
    });
  });

  describe("Decrement switch case", () => {
    test("has a decrement switch case", () => {
      const expectedState = {
        count: -1,
        auth: false,
      };
      expect(reducer(undefined, { type: "DECREMENT", payload: 1 })).toEqual(
        expectedState
      );
    });
  });

  describe("Multiply switch case", () => {
    test("has a multiply switch case", () => {
      const expectedState = {
        count: 100,
        auth: false,
      };
      expect(
        reducer({ count: 10, auth: false }, { type: "MULTIPLY", payload: 10 })
      ).toEqual(expectedState);
    });
  });

  describe("Update Counter switch case", () => {
    test("has a update counter switch case", () => {
      const expectedState = {
        count: 1,
        auth: false,
      };
      expect(reducer(undefined, { type: "UPDATECOUNTER", payload: 1 })).toEqual(
        expectedState
      );
    });
  });

  describe("Reset switch case", () => {
    test("has a reset switch case", () => {
      const expectedState = {
        count: 0,
        auth: false,
      };
      expect(
        reducer({ count: 10, auth: false }, { type: "RESET", payload: 0 })
      ).toEqual(expectedState);
    });
  });

  describe("Log In switch case", () => {
    test("has a log in switch case", () => {
      const expectedState = {
        count: 0,
        auth: true,
      };
      expect(reducer(undefined, { type: "LOGIN", payload: true })).toEqual(
        expectedState
      );
    });
  });

    describe("Log Out switch case", () => {
      test("has a log out switch case", () => {
        const expectedState = {
          count: 0,
          auth: false,
        };
        expect(reducer(undefined, { type: "LOGIN", payload: false })).toEqual(
          expectedState
        );
      });
    });

})