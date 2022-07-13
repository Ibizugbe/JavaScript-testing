const stringReverse = require("./stringReverse");
test("gets the string 'john' and returns 'nhoJ' as output", () => {
  expect(stringReverse("John")).toBe("nhoJ");
});
