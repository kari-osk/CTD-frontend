import dummy from "./dummy";

describe("dummy", () => {
  describe("when shouldTrigger is false", () => {
    it("should not call callback", () => {
      const callback = jest.fn();
      dummy(false, callback);
      expect(callback).not.toBeCalled();
    });
  });
  describe("when shouldTrigger is true", () => {
    it("should call callback", () => {
      const callback = jest.fn();
      dummy(true, callback);
      expect(callback).toBeCalled();
    });
  });
});
